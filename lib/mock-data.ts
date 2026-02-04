import type { StockLog } from "./types"

// Mock data based on the user's provided structure
export const mockStockData: StockLog[] = [
  {
    id: 1,
    stock_name: "우리기술",
    current_price: 4750,
    rsqn_ratio: 1.2534,
    rsqn_accel: 0.0245,
    change_rate: 2.37,
    cttr: 112.45,
    vol: 125000,
    state: "TRACE",
    log_time: "2025-02-04T09:00:00Z"
  },
  {
    id: 2,
    stock_name: "우리기술",
    current_price: 4785,
    rsqn_ratio: 1.3102,
    rsqn_accel: 0.0312,
    change_rate: 3.12,
    cttr: 118.32,
    vol: 142300,
    state: "TRACE",
    log_time: "2025-02-04T09:01:00Z"
  },
  {
    id: 3,
    stock_name: "우리기술",
    current_price: 4820,
    rsqn_ratio: 1.4215,
    rsqn_accel: 0.0428,
    change_rate: 3.87,
    cttr: 125.67,
    vol: 185200,
    state: "TRACE",
    log_time: "2025-02-04T09:02:00Z"
  },
  {
    id: 4,
    stock_name: "우리기술",
    current_price: 4890,
    rsqn_ratio: 1.5623,
    rsqn_accel: 0.0587,
    change_rate: 5.38,
    cttr: 134.21,
    vol: 245800,
    state: "BUY",
    log_time: "2025-02-04T09:03:00Z"
  },
  {
    id: 5,
    stock_name: "우리기술",
    current_price: 4925,
    rsqn_ratio: 1.4892,
    rsqn_accel: 0.0456,
    change_rate: 6.13,
    cttr: 128.45,
    vol: 198500,
    state: "BUY",
    log_time: "2025-02-04T09:04:00Z"
  },
  {
    id: 6,
    stock_name: "우리기술",
    current_price: 4880,
    rsqn_ratio: 1.3245,
    rsqn_accel: 0.0234,
    change_rate: 5.16,
    cttr: 115.78,
    vol: 165400,
    state: "TRACE",
    log_time: "2025-02-04T09:05:00Z"
  },
  {
    id: 7,
    stock_name: "우리기술",
    current_price: 4915,
    rsqn_ratio: 1.4102,
    rsqn_accel: 0.0378,
    change_rate: 5.92,
    cttr: 122.34,
    vol: 178900,
    state: "TRACE",
    log_time: "2025-02-04T09:06:00Z"
  },
  {
    id: 8,
    stock_name: "우리기술",
    current_price: 4965,
    rsqn_ratio: 1.5234,
    rsqn_accel: 0.0512,
    change_rate: 6.99,
    cttr: 131.56,
    vol: 225600,
    state: "BUY",
    log_time: "2025-02-04T09:07:00Z"
  },
  {
    id: 9,
    stock_name: "우리기술",
    current_price: 4940,
    rsqn_ratio: 1.3856,
    rsqn_accel: 0.0298,
    change_rate: 6.45,
    cttr: 118.92,
    vol: 156700,
    state: "TRACE",
    log_time: "2025-02-04T09:08:00Z"
  },
  {
    id: 10,
    stock_name: "우리기술",
    current_price: 4985,
    rsqn_ratio: 1.4678,
    rsqn_accel: 0.0423,
    change_rate: 7.42,
    cttr: 126.78,
    vol: 198400,
    state: "TRACE",
    log_time: "2025-02-04T09:09:00Z"
  },
  {
    id: 11,
    stock_name: "우리기술",
    current_price: 5025,
    rsqn_ratio: 1.5891,
    rsqn_accel: 0.0612,
    change_rate: 8.28,
    cttr: 138.45,
    vol: 268900,
    state: "BUY",
    log_time: "2025-02-04T09:10:00Z"
  },
  {
    id: 12,
    stock_name: "우리기술",
    current_price: 5010,
    rsqn_ratio: 1.4523,
    rsqn_accel: 0.0356,
    change_rate: 7.96,
    cttr: 121.34,
    vol: 178500,
    state: "TRACE",
    log_time: "2025-02-04T09:11:00Z"
  },
  {
    id: 13,
    stock_name: "삼성전자",
    current_price: 72500,
    rsqn_ratio: 0.9823,
    rsqn_accel: -0.0124,
    change_rate: -0.68,
    cttr: 94.56,
    vol: 1250000,
    state: "WAIT",
    log_time: "2025-02-04T09:00:00Z"
  },
  {
    id: 14,
    stock_name: "삼성전자",
    current_price: 72300,
    rsqn_ratio: 0.9456,
    rsqn_accel: -0.0198,
    change_rate: -0.96,
    cttr: 91.23,
    vol: 1185000,
    state: "WAIT",
    log_time: "2025-02-04T09:01:00Z"
  },
  {
    id: 15,
    stock_name: "삼성전자",
    current_price: 72450,
    rsqn_ratio: 1.0234,
    rsqn_accel: 0.0089,
    change_rate: -0.75,
    cttr: 98.45,
    vol: 1320000,
    state: "TRACE",
    log_time: "2025-02-04T09:02:00Z"
  },
  {
    id: 16,
    stock_name: "삼성전자",
    current_price: 72600,
    rsqn_ratio: 1.0892,
    rsqn_accel: 0.0178,
    change_rate: -0.55,
    cttr: 103.67,
    vol: 1456000,
    state: "TRACE",
    log_time: "2025-02-04T09:03:00Z"
  },
  {
    id: 17,
    stock_name: "삼성전자",
    current_price: 72800,
    rsqn_ratio: 1.1567,
    rsqn_accel: 0.0289,
    change_rate: -0.27,
    cttr: 108.92,
    vol: 1589000,
    state: "TRACE",
    log_time: "2025-02-04T09:04:00Z"
  },
  {
    id: 18,
    stock_name: "삼성전자",
    current_price: 73100,
    rsqn_ratio: 1.2345,
    rsqn_accel: 0.0412,
    change_rate: 0.14,
    cttr: 115.34,
    vol: 1756000,
    state: "BUY",
    log_time: "2025-02-04T09:05:00Z"
  },
  {
    id: 19,
    stock_name: "SK하이닉스",
    current_price: 178500,
    rsqn_ratio: 1.3456,
    rsqn_accel: 0.0534,
    change_rate: 2.87,
    cttr: 124.56,
    vol: 856000,
    state: "TRACE",
    log_time: "2025-02-04T09:00:00Z"
  },
  {
    id: 20,
    stock_name: "SK하이닉스",
    current_price: 179200,
    rsqn_ratio: 1.4123,
    rsqn_accel: 0.0623,
    change_rate: 3.27,
    cttr: 129.78,
    vol: 923000,
    state: "TRACE",
    log_time: "2025-02-04T09:01:00Z"
  },
  {
    id: 21,
    stock_name: "SK하이닉스",
    current_price: 180500,
    rsqn_ratio: 1.5234,
    rsqn_accel: 0.0756,
    change_rate: 4.02,
    cttr: 136.45,
    vol: 1045000,
    state: "BUY",
    log_time: "2025-02-04T09:02:00Z"
  },
  {
    id: 22,
    stock_name: "SK하이닉스",
    current_price: 181200,
    rsqn_ratio: 1.4892,
    rsqn_accel: 0.0678,
    change_rate: 4.43,
    cttr: 132.12,
    vol: 989000,
    state: "BUY",
    log_time: "2025-02-04T09:03:00Z"
  },
  {
    id: 23,
    stock_name: "SK하이닉스",
    current_price: 180800,
    rsqn_ratio: 1.3678,
    rsqn_accel: 0.0456,
    change_rate: 4.20,
    cttr: 121.89,
    vol: 876000,
    state: "TRACE",
    log_time: "2025-02-04T09:04:00Z"
  },
  {
    id: 24,
    stock_name: "SK하이닉스",
    current_price: 181500,
    rsqn_ratio: 1.4567,
    rsqn_accel: 0.0589,
    change_rate: 4.60,
    cttr: 127.34,
    vol: 934000,
    state: "TRACE",
    log_time: "2025-02-04T09:05:00Z"
  }
]

export function getStockNames(): string[] {
  return [...new Set(mockStockData.map(d => d.stock_name))]
}

export function getStockDataByName(stockName?: string): StockLog[] {
  if (!stockName) return mockStockData
  return mockStockData.filter(d => d.stock_name === stockName)
}
