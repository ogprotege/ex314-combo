// Database models and type definitions
export interface DBSaint {
  id: string;
  slug: string;
  name: string;
  feast_date: Date;
  feast_date_display: string;
  saint_type: 'Martyr' | 'Confessor' | 'Virgin' | 'Pope' | 'Doctor' | 'Other';
  title?: string;
  short_bio?: string;
  life?: string;
  legacy?: string;
  birth_year?: number;
  death_year?: number;
  canonization_year?: number;
  image_url?: string;
  born_location?: string;
  died_location?: string;
  canonized_date?: Date;
  liturgical_color: 'Red' | 'White' | 'Green' | 'Purple' | 'Rose';
  created_at: Date;
  updated_at: Date;
}

export interface DBSaintPatronage {
  id: string;
  saint_id: string;
  patronage: string;
  created_at: Date;
}

export interface DBSaintKeyEvent {
  id: string;
  saint_id: string;
  event_date?: Date;
  event_description: string;
  event_order: number;
  created_at: Date;
}

export interface DBSaintSpiritualTheme {
  id: string;
  saint_id: string;
  theme: string;
  created_at: Date;
}

export interface DBPrayer {
  id: string;
  title: string;
  text: string;
  category?: string;
  tradition?: string;
  author?: string;
  saint_id?: string;
  language: string;
  created_at: Date;
  updated_at: Date;
}

export interface DBSaintQuote {
  id: string;
  saint_id: string;
  text: string;
  source?: string;
  context?: string;
  created_at: Date;
}

export interface DBReading {
  id: string;
  title: string;
  citation: string;
  text: string;
  saint_id?: string;
  reading_type?: string;
  liturgical_date?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface DBLiturgicalCalendar {
  id: string;
  date: Date;
  year: number;
  season: string;
  week_number?: number;
  weekday?: string;
  color?: string;
  rank?: string;
  title?: string;
  readings_year_cycle?: string;
  first_reading_citation?: string;
  psalm_citation?: string;
  second_reading_citation?: string;
  gospel_citation?: string;
  saint_id?: string;
  created_at: Date;
}

// Search and filter parameters
export interface SaintSearchParams {
  query?: string;
  type?: string;
  month?: number;
  day?: number;
  patronage?: string;
  liturgicalColor?: string;
  limit?: number;
  offset?: number;
  sortBy?: 'name' | 'feast_date' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

export interface PrayerSearchParams {
  query?: string;
  category?: string;
  tradition?: string;
  saintId?: string;
  language?: string;
  limit?: number;
  offset?: number;
}

export interface ReadingSearchParams {
  query?: string;
  type?: string;
  saintId?: string;
  liturgicalDate?: Date;
  limit?: number;
  offset?: number;
}

// Response types with pagination
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Cache key generators
export const CacheKeys = {
  saint: (id: string) => `saint:${id}`,
  saintBySlug: (slug: string) => `saint:slug:${slug}`,
  saintsList: (params: SaintSearchParams) => `saints:list:${JSON.stringify(params)}`,
  saintsByMonth: (month: number) => `saints:month:${month}`,
  saintsByDay: (month: number, day: number) => `saints:day:${month}-${day}`,
  prayer: (id: string) => `prayer:${id}`,
  prayersList: (params: PrayerSearchParams) => `prayers:list:${JSON.stringify(params)}`,
  prayersBySaint: (saintId: string) => `prayers:saint:${saintId}`,
  reading: (id: string) => `reading:${id}`,
  readingsList: (params: ReadingSearchParams) => `readings:list:${JSON.stringify(params)}`,
  readingsBySaint: (saintId: string) => `readings:saint:${saintId}`,
  liturgicalCalendar: (date: string) => `liturgical:${date}`,
  popularSaints: (limit: number) => `saints:popular:${limit}`,
};

// Cache TTL values (in seconds)
export const CacheTTL = {
  saint: 86400, // 24 hours
  saintsList: 3600, // 1 hour
  prayer: 86400, // 24 hours
  prayersList: 3600, // 1 hour
  reading: 86400, // 24 hours
  readingsList: 3600, // 1 hour
  liturgicalCalendar: 86400, // 24 hours
  popularSaints: 7200, // 2 hours
};