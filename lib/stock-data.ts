import { mockStockData, getStockNames as getMockStockNames, getStockDataByName } from "./mock-data"
import type { StockLog } from "./types"

// Set to true to use mock data, false to use Supabase
const USE_MOCK_DATA = true

export async function getStockLogs(stockName?: string, limit = 100): Promise<StockLog[]> {
  if (USE_MOCK_DATA) {
    const data = getStockDataByName(stockName)
    return data.slice(0, limit)
  }

  // Supabase implementation (for later)
  const { createClient } = await import("@/lib/supabase/server")
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
  if (USE_MOCK_DATA) {
    return getMockStockNames()
  }

  // Supabase implementation (for later)
  const { createClient } = await import("@/lib/supabase/server")
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
