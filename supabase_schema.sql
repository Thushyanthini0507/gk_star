-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create items table
CREATE TABLE IF NOT EXISTS items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  price DECIMAL(10, 2),
  category TEXT, -- (e.g. "Logo", "Visiting Card")
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(service_id, slug)
);

-- Enable RLS (Optional, for public read access)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access for services" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read access for items" ON items FOR SELECT USING (true);

-- Initial Services Data
INSERT INTO services (name, slug, icon) VALUES
('Tailoring Services', 'tailoring', 'Scissors'),
('Aari Work Services', 'aari-work', 'Needle'),
('Beauty & Makeup Services', 'beauty-makeup', 'Sparkles'),
('Hair Cutting & Salon', 'hair-salon', 'User'),
('Designing Services', 'designing', 'Palette'),
('Photography & Camera', 'photography', 'Camera'),
('Cake Services', 'cakes', 'Cake'),
('Vehicle Services', 'vehicles', 'Car'),
('Poultry Services', 'poultry', 'Bird'),
('Panthal Services', 'panthal', 'Tent');
