import { getStockNames as getMockStockNames, getStockDataByName } from "./mock-data"
import type { StockLog } from "./types"

export async function getStockLogs(stockName?: string, limit = 100): Promise<StockLog[]> {
  const data = getStockDataByName(stockName)
  return data.slice(0, limit)
}

export async function getStockNames(): Promise<string[]> {
  return getMockStockNames()
}
