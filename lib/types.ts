export interface StockLog {
  id: number
  stock_name: string
  current_price: number
  rsqn_ratio: number | null
  rsqn_accel: number | null
  change_rate: number | null
  cttr: number | null
  vol: number | null
  state: string | null
  log_time: string
}
