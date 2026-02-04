import { createClient } from "@/lib/supabase/server"
import type { StockLog } from "./types"

export async function getStockLogs(stockName?: string, limit = 100): Promise<StockLog[]> {
  const supabase = await createClient()
  
  let query = supabase
    .from("stock_logs")
    .select("*")
    .order("log_time", { ascending: true })
    .limit(limit)
  
  if (stockName) {
    query = query.eq("stock_name", stockName)
  }
  
  const { data, error } = await query
  
  if (error) {
    console.error("Error fetching stock logs:", error)
    return []
  }
  
  return data || []
}

export async function getStockNames(): Promise<string[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("stock_logs")
    .select("stock_name")
    .order("stock_name")
  
  if (error) {
    console.error("Error fetching stock names:", error)
    return []
  }
  
  // Get unique stock names
  const uniqueNames = [...new Set(data?.map(d => d.stock_name) || [])]
  return uniqueNames
}
