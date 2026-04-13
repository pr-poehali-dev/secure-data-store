CREATE TABLE registrations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(200),
  service VARCHAR(200) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
