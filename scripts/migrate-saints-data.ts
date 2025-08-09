#!/usr/bin/env node
import { getPool, closeDatabaseConnections, withTransaction } from '../lib/database/connection';
import { saintsData } from '../lib/saints-data';
import type { Saint } from '../lib/saints-data';

// Helper to convert feast date string to proper date
function parseFeastDate(feastDateStr: string): Date {
  const months: { [key: string]: number } = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3,
    'May': 4, 'June': 5, 'July': 6, 'August': 7,
    'September': 8, 'October': 9, 'November': 10, 'December': 11
  };
  
  const parts = feastDateStr.split(' ');
  const month = months[parts[0]];
  const day = parseInt(parts[1], 10);
  
  // Use year 2000 as a placeholder for feast dates
  return new Date(2000, month, day);
}

// Helper to create slug from name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function migrateSaintsData() {
  console.log('🚀 Starting saints data migration...');
  console.log(`📊 Found ${saintsData.length} saints to migrate`);
  
  try {
    await withTransaction(async (client) => {
      let migrated = 0;
      let errors = 0;
      
      for (const saint of saintsData) {
        try {
          // Insert main saint record
          const saintResult = await client.query(
            `INSERT INTO saints (
              slug, name, feast_date, feast_date_display, saint_type,
              title, short_bio, life, legacy, birth_year, death_year,
              canonization_year, image_url, born_location, died_location,
              liturgical_color
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
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
              liturgical_color = EXCLUDED.liturgical_color,
              updated_at = CURRENT_TIMESTAMP
            RETURNING id`,
            [
              createSlug(saint.name),
              saint.name,
              parseFeastDate(saint.feastDate),
              saint.feastDate,
              saint.type,
              saint.title || null,
              saint.shortBio || null,
              saint.life || null,
              saint.legacy || null,
              saint.birthYear || null,
              saint.deathYear || null,
              saint.canonizationYear || null,
              saint.imageUrl || null,
              saint.born || null,
              saint.died || null,
              saint.liturgicalColor
            ]
          );
          
          const saintId = saintResult.rows[0].id;
          
          // Insert patronage
          if (saint.patronage && saint.patronage.length > 0) {
            for (const patronage of saint.patronage) {
              await client.query(
                `INSERT INTO saint_patronage (saint_id, patronage)
                 VALUES ($1, $2)
                 ON CONFLICT (saint_id, patronage) DO NOTHING`,
                [saintId, patronage]
              );
            }
          }
          
          // Insert key events
          if (saint.keyEvents && saint.keyEvents.length > 0) {
            for (let i = 0; i < saint.keyEvents.length; i++) {
              await client.query(
                `INSERT INTO saint_key_events (saint_id, event_description, event_order)
                 VALUES ($1, $2, $3)`,
                [saintId, saint.keyEvents[i], i]
              );
            }
          }
          
          // Insert spiritual themes
          if (saint.spiritualThemes && saint.spiritualThemes.length > 0) {
            for (const theme of saint.spiritualThemes) {
              await client.query(
                `INSERT INTO saint_spiritual_themes (saint_id, theme)
                 VALUES ($1, $2)
                 ON CONFLICT (saint_id, theme) DO NOTHING`,
                [saintId, theme]
              );
            }
          }
          
          // Insert prayers
          if (saint.prayers && saint.prayers.length > 0) {
            for (const prayer of saint.prayers) {
              await client.query(
                `INSERT INTO prayers (title, text, saint_id, language)
                 VALUES ($1, $2, $3, $4)`,
                [prayer.title, prayer.text, saintId, 'en']
              );
            }
          }
          
          // Insert quotes
          if (saint.quotes && saint.quotes.length > 0) {
            for (const quote of saint.quotes) {
              await client.query(
                `INSERT INTO saint_quotes (saint_id, text, source)
                 VALUES ($1, $2, $3)`,
                [saintId, quote.text, quote.source || null]
              );
            }
          }
          
          // Insert readings
          if (saint.readings && saint.readings.length > 0) {
            for (const reading of saint.readings) {
              await client.query(
                `INSERT INTO readings (title, citation, text, saint_id)
                 VALUES ($1, $2, $3, $4)`,
                [reading.title, reading.citation, reading.text, saintId]
              );
            }
          }
          
          migrated++;
          
          if (migrated % 10 === 0) {
            console.log(`  ✓ Migrated ${migrated}/${saintsData.length} saints...`);
          }
          
        } catch (error) {
          console.error(`  ✗ Error migrating saint "${saint.name}":`, error);
          errors++;
        }
      }
      
      console.log(`\n✅ Migration complete!`);
      console.log(`  - Successfully migrated: ${migrated} saints`);
      console.log(`  - Errors: ${errors}`);
      
      // Refresh materialized views
      console.log('\n🔄 Refreshing materialized views...');
      await client.query('REFRESH MATERIALIZED VIEW saints_by_month');
      await client.query('REFRESH MATERIALIZED VIEW popular_saints');
      console.log('✅ Materialized views refreshed');
      
      // Show statistics
      const statsResult = await client.query(`
        SELECT 
          (SELECT COUNT(*) FROM saints) as total_saints,
          (SELECT COUNT(*) FROM prayers) as total_prayers,
          (SELECT COUNT(*) FROM saint_quotes) as total_quotes,
          (SELECT COUNT(*) FROM readings) as total_readings,
          (SELECT COUNT(DISTINCT saint_id) FROM saint_patronage) as saints_with_patronage
      `);
      
      const stats = statsResult.rows[0];
      console.log('\n📊 Database Statistics:');
      console.log(`  - Total Saints: ${stats.total_saints}`);
      console.log(`  - Total Prayers: ${stats.total_prayers}`);
      console.log(`  - Total Quotes: ${stats.total_quotes}`);
      console.log(`  - Total Readings: ${stats.total_readings}`);
      console.log(`  - Saints with Patronage: ${stats.saints_with_patronage}`);
    });
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await closeDatabaseConnections();
  }
}

// Run if executed directly
if (require.main === module) {
  migrateSaintsData();
}