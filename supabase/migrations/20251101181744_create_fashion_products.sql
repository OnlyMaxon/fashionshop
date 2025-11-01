/*
  # Fashion Shop Database Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `description` (text) - Product description
      - `price` (decimal) - Product price
      - `category` (text) - Product category (e.g., 'dresses', 'accessories', 'shoes')
      - `image_url` (text) - Product image URL
      - `stock` (integer) - Available stock quantity
      - `featured` (boolean) - Whether product is featured
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `products` table
    - Add policy for public read access (shop is publicly viewable)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are publicly readable"
  ON products
  FOR SELECT
  TO anon
  USING (true);