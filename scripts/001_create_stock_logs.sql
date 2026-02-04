-- Create stock_logs table for storing stock analysis data
CREATE TABLE IF NOT EXISTS public.stock_logs (
  id BIGSERIAL PRIMARY KEY,
  stock_name TEXT NOT NULL,
  current_price NUMERIC NOT NULL,
  rsqn_ratio NUMERIC,
  rsqn_accel NUMERIC,
  change_rate NUMERIC,
  cttr NUMERIC,
  vol BIGINT,
  state TEXT,
  log_time TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster queries by stock name and time
CREATE INDEX IF NOT EXISTS idx_stock_logs_stock_name ON public.stock_logs(stock_name);
CREATE INDEX IF NOT EXISTS idx_stock_logs_log_time ON public.stock_logs(log_time DESC);
CREATE INDEX IF NOT EXISTS idx_stock_logs_stock_time ON public.stock_logs(stock_name, log_time DESC);

-- Enable Row Level Security
ALTER TABLE public.stock_logs ENABLE ROW LEVEL SECURITY;

-- Allow public read access (for dashboard viewing)
CREATE POLICY "Allow public read access" ON public.stock_logs
  FOR SELECT USING (true);

-- Allow authenticated users to insert data
CREATE POLICY "Allow authenticated insert" ON public.stock_logs
  FOR INSERT WITH CHECK (true);
