import { query, withTransaction, getCached, setCached, invalidateCache } from './connection';
import { 
  DBSaint, 
  DBSaintPatronage, 
  DBSaintKeyEvent, 
  DBSaintSpiritualTheme,
  DBPrayer,
  DBSaintQuote,
  DBReading,
  SaintSearchParams,
  PaginatedResponse,
  CacheKeys,
  CacheTTL
} from './models';

// Get a single saint by ID with all related data
export async function getSaintById(id: string): Promise<DBSaint | null> {
  const cacheKey = CacheKeys.saint(id);
  const cached = await getCached<DBSaint>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const result = await query<DBSaint>(
    'SELECT * FROM saints WHERE id = $1',
    [id]
  );
  
  if (result.rows.length === 0) {
    return null;
  }
  
  const saint = result.rows[0];
  await setCached(cacheKey, saint, CacheTTL.saint);
  
  return saint;
}

// Get a saint by slug
export async function getSaintBySlug(slug: string): Promise<DBSaint | null> {
  const cacheKey = CacheKeys.saintBySlug(slug);
  const cached = await getCached<DBSaint>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const result = await query<DBSaint>(
    'SELECT * FROM saints WHERE slug = $1',
    [slug]
  );
  
  if (result.rows.length === 0) {
    return null;
  }
  
  const saint = result.rows[0];
  await setCached(cacheKey, saint, CacheTTL.saint);
  
  return saint;
}

// Get saint with all related data
export async function getSaintWithRelatedData(id: string): Promise<any> {
  const saint = await getSaintById(id);
  
  if (!saint) {
    return null;
  }
  
  // Fetch all related data in parallel
  const [patronage, keyEvents, spiritualThemes, prayers, quotes, readings] = await Promise.all([
    query<DBSaintPatronage>(
      'SELECT * FROM saint_patronage WHERE saint_id = $1 ORDER BY patronage',
      [id]
    ),
    query<DBSaintKeyEvent>(
      'SELECT * FROM saint_key_events WHERE saint_id = $1 ORDER BY event_order, event_date',
      [id]
    ),
    query<DBSaintSpiritualTheme>(
      'SELECT * FROM saint_spiritual_themes WHERE saint_id = $1 ORDER BY theme',
      [id]
    ),
    query<DBPrayer>(
      'SELECT * FROM prayers WHERE saint_id = $1 ORDER BY title',
      [id]
    ),
    query<DBSaintQuote>(
      'SELECT * FROM saint_quotes WHERE saint_id = $1 ORDER BY created_at',
      [id]
    ),
    query<DBReading>(
      'SELECT * FROM readings WHERE saint_id = $1 ORDER BY title',
      [id]
    ),
  ]);
  
  return {
    ...saint,
    patronage: patronage.rows.map(p => p.patronage),
    keyEvents: keyEvents.rows.map(e => ({
      date: e.event_date,
      description: e.event_description,
    })),
    spiritualThemes: spiritualThemes.rows.map(t => t.theme),
    prayers: prayers.rows,
    quotes: quotes.rows,
    readings: readings.rows,
  };
}

// Search saints with pagination and filtering
export async function searchSaints(params: SaintSearchParams): Promise<PaginatedResponse<DBSaint>> {
  const cacheKey = CacheKeys.saintsList(params);
  const cached = await getCached<PaginatedResponse<DBSaint>>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const {
    query: searchQuery,
    type,
    month,
    day,
    patronage,
    liturgicalColor,
    limit = 20,
    offset = 0,
    sortBy = 'feast_date',
    sortOrder = 'asc',
  } = params;
  
  let whereClause = 'WHERE 1=1';
  const queryParams: any[] = [];
  let paramCount = 0;
  
  // Build WHERE clause based on search parameters
  if (searchQuery) {
    paramCount++;
    whereClause += ` AND (
      search_vector @@ plainto_tsquery('english', $${paramCount})
      OR name ILIKE $${paramCount + 1}
    )`;
    queryParams.push(searchQuery, `%${searchQuery}%`);
    paramCount++;
  }
  
  if (type) {
    paramCount++;
    whereClause += ` AND saint_type = $${paramCount}`;
    queryParams.push(type);
  }
  
  if (month !== undefined) {
    paramCount++;
    whereClause += ` AND EXTRACT(MONTH FROM feast_date) = $${paramCount}`;
    queryParams.push(month);
  }
  
  if (day !== undefined) {
    paramCount++;
    whereClause += ` AND EXTRACT(DAY FROM feast_date) = $${paramCount}`;
    queryParams.push(day);
  }
  
  if (liturgicalColor) {
    paramCount++;
    whereClause += ` AND liturgical_color = $${paramCount}`;
    queryParams.push(liturgicalColor);
  }
  
  if (patronage) {
    paramCount++;
    whereClause += ` AND id IN (
      SELECT saint_id FROM saint_patronage 
      WHERE patronage ILIKE $${paramCount}
    )`;
    queryParams.push(`%${patronage}%`);
  }
  
  // Build ORDER BY clause
  const validSortColumns = ['name', 'feast_date'];
  const sortColumn = validSortColumns.includes(sortBy) ? sortBy : 'feast_date';
  const sortDirection = sortOrder === 'desc' ? 'DESC' : 'ASC';
  let orderByClause = `ORDER BY ${sortColumn} ${sortDirection}`;
  
  if (sortBy === 'popularity') {
    orderByClause = `
      ORDER BY (
        SELECT COUNT(*) FROM prayers WHERE saint_id = saints.id
      ) + (
        SELECT COUNT(*) FROM saint_quotes WHERE saint_id = saints.id
      ) + (
        SELECT COUNT(*) FROM readings WHERE saint_id = saints.id
      ) DESC
    `;
  }
  
  // Count total results
  const countQuery = `SELECT COUNT(*) FROM saints ${whereClause}`;
  const countResult = await query<{ count: string }>(countQuery, queryParams);
  const total = parseInt(countResult.rows[0].count, 10);
  
  // Get paginated results
  paramCount++;
  const limitParam = paramCount;
  paramCount++;
  const offsetParam = paramCount;
  
  const dataQuery = `
    SELECT * FROM saints 
    ${whereClause} 
    ${orderByClause}
    LIMIT $${limitParam} OFFSET $${offsetParam}
  `;
  
  const dataResult = await query<DBSaint>(
    dataQuery,
    [...queryParams, limit, offset]
  );
  
  const response: PaginatedResponse<DBSaint> = {
    data: dataResult.rows,
    total,
    page: Math.floor(offset / limit) + 1,
    pageSize: limit,
    totalPages: Math.ceil(total / limit),
  };
  
  await setCached(cacheKey, response, CacheTTL.saintsList);
  
  return response;
}

// Get saints by month
export async function getSaintsByMonth(month: number): Promise<DBSaint[]> {
  const cacheKey = CacheKeys.saintsByMonth(month);
  const cached = await getCached<DBSaint[]>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const result = await query<DBSaint>(
    `SELECT * FROM saints 
     WHERE EXTRACT(MONTH FROM feast_date) = $1 
     ORDER BY EXTRACT(DAY FROM feast_date), name`,
    [month]
  );
  
  await setCached(cacheKey, result.rows, CacheTTL.saintsList);
  
  return result.rows;
}

// Get saints by specific day
export async function getSaintsByDay(month: number, day: number): Promise<DBSaint[]> {
  const cacheKey = CacheKeys.saintsByDay(month, day);
  const cached = await getCached<DBSaint[]>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const result = await query<DBSaint>(
    `SELECT * FROM saints 
     WHERE EXTRACT(MONTH FROM feast_date) = $1 
     AND EXTRACT(DAY FROM feast_date) = $2 
     ORDER BY name`,
    [month, day]
  );
  
  await setCached(cacheKey, result.rows, CacheTTL.saintsList);
  
  return result.rows;
}

// Get popular saints
export async function getPopularSaints(limit: number = 10): Promise<any[]> {
  const cacheKey = CacheKeys.popularSaints(limit);
  const cached = await getCached<any[]>(cacheKey);
  
  if (cached) {
    return cached;
  }
  
  const result = await query(
    `SELECT 
      s.*,
      COUNT(DISTINCT p.id) as prayer_count,
      COUNT(DISTINCT q.id) as quote_count,
      COUNT(DISTINCT r.id) as reading_count
    FROM saints s
    LEFT JOIN prayers p ON s.id = p.saint_id
    LEFT JOIN saint_quotes q ON s.id = q.saint_id
    LEFT JOIN readings r ON s.id = r.saint_id
    GROUP BY s.id
    ORDER BY (COUNT(DISTINCT p.id) + COUNT(DISTINCT q.id) + COUNT(DISTINCT r.id)) DESC
    LIMIT $1`,
    [limit]
  );
  
  await setCached(cacheKey, result.rows, CacheTTL.popularSaints);
  
  return result.rows;
}

// Create or update a saint
export async function upsertSaint(saint: Partial<DBSaint>): Promise<DBSaint> {
  const {
    slug,
    name,
    feast_date,
    feast_date_display,
    saint_type,
    title,
    short_bio,
    life,
    legacy,
    birth_year,
    death_year,
    canonization_year,
    image_url,
    born_location,
    died_location,
    canonized_date,
    liturgical_color,
  } = saint;
  
  const result = await query<DBSaint>(
    `INSERT INTO saints (
      slug, name, feast_date, feast_date_display, saint_type,
      title, short_bio, life, legacy, birth_year, death_year,
      canonization_year, image_url, born_location, died_location,
      canonized_date, liturgical_color
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    ON CONFLICT (slug) DO UPDATE SET
      name = EXCLUDED.name,
      feast_date = EXCLUDED.feast_date,
      feast_date_display = EXCLUDED.feast_date_display,
      saint_type = EXCLUDED.saint_type,
      title = EXCLUDED.title,
      short_bio = EXCLUDED.short_bio,
      life = EXCLUDED.life,
      legacy = EXCLUDED.legacy,
      birth_year = EXCLUDED.birth_year,
      death_year = EXCLUDED.death_year,
      canonization_year = EXCLUDED.canonization_year,
      image_url = EXCLUDED.image_url,
      born_location = EXCLUDED.born_location,
      died_location = EXCLUDED.died_location,
      canonized_date = EXCLUDED.canonized_date,
      liturgical_color = EXCLUDED.liturgical_color,
      updated_at = CURRENT_TIMESTAMP
    RETURNING *`,
    [
      slug, name, feast_date, feast_date_display, saint_type,
      title, short_bio, life, legacy, birth_year, death_year,
      canonization_year, image_url, born_location, died_location,
      canonized_date, liturgical_color,
    ]
  );
  
  // Invalidate related caches
  await invalidateCache('saints:*');
  
  return result.rows[0];
}

// Bulk import saints
export async function bulkImportSaints(saints: Partial<DBSaint>[]): Promise<number> {
  let imported = 0;
  
  await withTransaction(async (client) => {
    for (const saint of saints) {
      await client.query(
        `INSERT INTO saints (
          slug, name, feast_date, feast_date_display, saint_type,
          title, short_bio, life, legacy, birth_year, death_year,
          canonization_year, image_url, born_location, died_location,
          canonized_date, liturgical_color
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
        ON CONFLICT (slug) DO UPDATE SET
          name = EXCLUDED.name,
          feast_date = EXCLUDED.feast_date,
          feast_date_display = EXCLUDED.feast_date_display,
          saint_type = EXCLUDED.saint_type,
          title = EXCLUDED.title,
          short_bio = EXCLUDED.short_bio,
          life = EXCLUDED.life,
          legacy = EXCLUDED.legacy,
          birth_year = EXCLUDED.birth_year,
          death_year = EXCLUDED.death_year,
          canonization_year = EXCLUDED.canonization_year,
          image_url = EXCLUDED.image_url,
          born_location = EXCLUDED.born_location,
          died_location = EXCLUDED.died_location,
          canonized_date = EXCLUDED.canonized_date,
          liturgical_color = EXCLUDED.liturgical_color,
          updated_at = CURRENT_TIMESTAMP`,
        [
          saint.slug, saint.name, saint.feast_date, saint.feast_date_display, saint.saint_type,
          saint.title, saint.short_bio, saint.life, saint.legacy, saint.birth_year, saint.death_year,
          saint.canonization_year, saint.image_url, saint.born_location, saint.died_location,
          saint.canonized_date, saint.liturgical_color,
        ]
      );
      imported++;
    }
  });
  
  // Invalidate all saints caches
  await invalidateCache('saints:*');
  
  return imported;
}