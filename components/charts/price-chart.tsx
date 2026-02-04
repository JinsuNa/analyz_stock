"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { StockLog } from "@/lib/types"

interface PriceChartProps {
  data: StockLog[]
}

export function PriceChart({ data }: PriceChartProps) {
  const chartData = data.map((log) => ({
    time: new Date(log.log_time).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    price: Number(log.current_price),
    changeRate: Number(log.change_rate) || 0,
  }))

  const minPrice = Math.min(...chartData.map((d) => d.price)) * 0.999
  const maxPrice = Math.max(...chartData.map((d) => d.price)) * 1.001

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="time" 
            stroke="#9CA3AF" 
            fontSize={11}
            tickLine={false}
          />
          <YAxis
            stroke="#9CA3AF"
            fontSize={11}
            tickLine={false}
            domain={[minPrice, maxPrice]}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              color: "#F9FAFB",
            }}
            formatter={(value: number) => [value.toLocaleString() + "원", "현재가"]}
            labelFormatter={(label) => `시간: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#10B981"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#10B981" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
