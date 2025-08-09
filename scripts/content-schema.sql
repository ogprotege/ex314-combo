-- Ex314.ai Content Database Schema
-- Tables for Saints, Prayers, Readings and Liturgical Calendar

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm"; -- For fuzzy text search
CREATE EXTENSION IF NOT EXISTS "unaccent"; -- For accent-insensitive search

-- 1. Saints Table
CREATE TABLE IF NOT EXISTS saints (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(500) NOT NULL,
  feast_date DATE NOT NULL,
  feast_date_display VARCHAR(100),
  saint_type VARCHAR(50) NOT NULL CHECK (saint_type IN ('Martyr', 'Confessor', 'Virgin', 'Pope', 'Doctor', 'Other')),
  title TEXT,
  short_bio TEXT,
  life TEXT,
  legacy TEXT,
  birth_year INTEGER,
  death_year INTEGER,
  canonization_year INTEGER,
  image_url TEXT,
  born_location VARCHAR(500),
  died_location VARCHAR(500),
  canonized_date DATE,
  liturgical_color VARCHAR(20) CHECK (liturgical_color IN ('Red', 'White', 'Green', 'Purple', 'Rose')),
  search_vector tsvector,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Saints
CREATE INDEX IF NOT EXISTS idx_saints_feast_date ON saints(feast_date);
CREATE INDEX IF NOT EXISTS idx_saints_name_trgm ON saints USING gin(name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_saints_search_vector ON saints USING gin(search_vector);
CREATE INDEX IF NOT EXISTS idx_saints_saint_type ON saints(saint_type);
CREATE INDEX IF NOT EXISTS idx_saints_liturgical_color ON saints(liturgical_color);

-- 2. Saint Patronage Table (many-to-many)
CREATE TABLE IF NOT EXISTS saint_patronage (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  saint_id UUID NOT NULL REFERENCES saints(id) ON DELETE CASCADE,
  patronage VARCHAR(500) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(saint_id, patronage)
);

CREATE INDEX IF NOT EXISTS idx_saint_patronage_saint_id ON saint_patronage(saint_id);
CREATE INDEX IF NOT EXISTS idx_saint_patronage_patronage ON saint_patronage(patronage);

-- 3. Saint Key Events Table
CREATE TABLE IF NOT EXISTS saint_key_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  saint_id UUID NOT NULL REFERENCES saints(id) ON DELETE CASCADE,
  event_date DATE,
  event_description TEXT NOT NULL,
  event_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_saint_key_events_saint_id ON saint_key_events(saint_id);
CREATE INDEX IF NOT EXISTS idx_saint_key_events_event_date ON saint_key_events(event_date);

-- 4. Saint Spiritual Themes Table
CREATE TABLE IF NOT EXISTS saint_spiritual_themes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  saint_id UUID NOT NULL REFERENCES saints(id) ON DELETE CASCADE,
  theme VARCHAR(500) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(saint_id, theme)
);

CREATE INDEX IF NOT EXISTS idx_saint_spiritual_themes_saint_id ON saint_spiritual_themes(saint_id);
CREATE INDEX IF NOT EXISTS idx_saint_spiritual_themes_theme ON saint_spiritual_themes(theme);

-- 5. Prayers Table
CREATE TABLE IF NOT EXISTS prayers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(500) NOT NULL,
  text TEXT NOT NULL,
  category VARCHAR(100),
  tradition VARCHAR(100),
  author VARCHAR(500),
  saint_id UUID REFERENCES saints(id) ON DELETE SET NULL,
  language VARCHAR(10) DEFAULT 'en',
  search_vector tsvector,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Prayers
CREATE INDEX IF NOT EXISTS idx_prayers_saint_id ON prayers(saint_id);
CREATE INDEX IF NOT EXISTS idx_prayers_category ON prayers(category);
CREATE INDEX IF NOT EXISTS idx_prayers_tradition ON prayers(tradition);
CREATE INDEX IF NOT EXISTS idx_prayers_search_vector ON prayers USING gin(search_vector);
CREATE INDEX IF NOT EXISTS idx_prayers_title_trgm ON prayers USING gin(title gin_trgm_ops);

-- 6. Saint Quotes Table
CREATE TABLE IF NOT EXISTS saint_quotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  saint_id UUID NOT NULL REFERENCES saints(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  source VARCHAR(500),
  context TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_saint_quotes_saint_id ON saint_quotes(saint_id);

-- 7. Readings Table
CREATE TABLE IF NOT EXISTS readings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(500) NOT NULL,
  citation VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  saint_id UUID REFERENCES saints(id) ON DELETE SET NULL,
  reading_type VARCHAR(50),
  liturgical_date DATE,
  search_vector tsvector,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Readings
CREATE INDEX IF NOT EXISTS idx_readings_saint_id ON readings(saint_id);
CREATE INDEX IF NOT EXISTS idx_readings_liturgical_date ON readings(liturgical_date);
CREATE INDEX IF NOT EXISTS idx_readings_reading_type ON readings(reading_type);
CREATE INDEX IF NOT EXISTS idx_readings_search_vector ON readings USING gin(search_vector);

-- 8. Liturgical Calendar Table
CREATE TABLE IF NOT EXISTS liturgical_calendar (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  date DATE NOT NULL,
  year INTEGER NOT NULL,
  season VARCHAR(50) NOT NULL,
  week_number INTEGER,
  weekday VARCHAR(20),
  color VARCHAR(20),
  rank VARCHAR(50),
  title VARCHAR(500),
  readings_year_cycle CHAR(1),
  first_reading_citation VARCHAR(255),
  psalm_citation VARCHAR(255),
  second_reading_citation VARCHAR(255),
  gospel_citation VARCHAR(255),
  saint_id UUID REFERENCES saints(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(date, year)
);

-- Indexes for Liturgical Calendar
CREATE INDEX IF NOT EXISTS idx_liturgical_calendar_date ON liturgical_calendar(date);
CREATE INDEX IF NOT EXISTS idx_liturgical_calendar_year ON liturgical_calendar(year);
CREATE INDEX IF NOT EXISTS idx_liturgical_calendar_season ON liturgical_calendar(season);
CREATE INDEX IF NOT EXISTS idx_liturgical_calendar_saint_id ON liturgical_calendar(saint_id);

-- Full-text search triggers
CREATE OR REPLACE FUNCTION update_saints_search_vector() RETURNS trigger AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.name, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.short_bio, '')), 'C') ||
    setweight(to_tsvector('english', COALESCE(NEW.life, '')), 'D');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_saints_search_vector_trigger ON saints;
CREATE TRIGGER update_saints_search_vector_trigger
  BEFORE INSERT OR UPDATE ON saints
  FOR EACH ROW EXECUTE FUNCTION update_saints_search_vector();

CREATE OR REPLACE FUNCTION update_prayers_search_vector() RETURNS trigger AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.text, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.category, '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_prayers_search_vector_trigger ON prayers;
CREATE TRIGGER update_prayers_search_vector_trigger
  BEFORE INSERT OR UPDATE ON prayers
  FOR EACH ROW EXECUTE FUNCTION update_prayers_search_vector();

CREATE OR REPLACE FUNCTION update_readings_search_vector() RETURNS trigger AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.citation, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.text, '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_readings_search_vector_trigger ON readings;
CREATE TRIGGER update_readings_search_vector_trigger
  BEFORE INSERT OR UPDATE ON readings
  FOR EACH ROW EXECUTE FUNCTION update_readings_search_vector();

-- Helper function for updated_at
CREATE OR REPLACE FUNCTION update_content_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers for updated_at
DROP TRIGGER IF EXISTS update_saints_updated_at ON saints;
CREATE TRIGGER update_saints_updated_at BEFORE UPDATE ON saints
    FOR EACH ROW EXECUTE FUNCTION update_content_updated_at_column();

DROP TRIGGER IF EXISTS update_prayers_updated_at ON prayers;
CREATE TRIGGER update_prayers_updated_at BEFORE UPDATE ON prayers
    FOR EACH ROW EXECUTE FUNCTION update_content_updated_at_column();

DROP TRIGGER IF EXISTS update_readings_updated_at ON readings;
CREATE TRIGGER update_readings_updated_at BEFORE UPDATE ON readings
    FOR EACH ROW EXECUTE FUNCTION update_content_updated_at_column();

-- Materialized Views for Performance
CREATE MATERIALIZED VIEW IF NOT EXISTS saints_by_month AS
SELECT 
  EXTRACT(MONTH FROM feast_date) as month,
  EXTRACT(DAY FROM feast_date) as day,
  id,
  slug,
  name,
  feast_date,
  saint_type,
  title,
  short_bio,
  liturgical_color
FROM saints
ORDER BY feast_date;

CREATE INDEX IF NOT EXISTS idx_saints_by_month ON saints_by_month(month, day);

-- Popular Saints View
CREATE MATERIALIZED VIEW IF NOT EXISTS popular_saints AS
SELECT 
  s.id,
  s.slug,
  s.name,
  s.feast_date,
  s.saint_type,
  s.title,
  s.short_bio,
  COUNT(DISTINCT p.id) as prayer_count,
  COUNT(DISTINCT q.id) as quote_count,
  COUNT(DISTINCT r.id) as reading_count
FROM saints s
LEFT JOIN prayers p ON s.id = p.saint_id
LEFT JOIN saint_quotes q ON s.id = q.saint_id
LEFT JOIN readings r ON s.id = r.saint_id
GROUP BY s.id, s.slug, s.name, s.feast_date, s.saint_type, s.title, s.short_bio
ORDER BY (COUNT(DISTINCT p.id) + COUNT(DISTINCT q.id) + COUNT(DISTINCT r.id)) DESC;

-- Function to refresh materialized views
CREATE OR REPLACE FUNCTION refresh_content_materialized_views()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY saints_by_month;
  REFRESH MATERIALIZED VIEW CONCURRENTLY popular_saints;
END;
$$ LANGUAGE plpgsql;