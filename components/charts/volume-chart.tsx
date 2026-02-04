"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import type { StockLog } from "@/lib/types"

interface VolumeChartProps {
  data: StockLog[]
}

export function VolumeChart({ data }: VolumeChartProps) {
  const chartData = data.map((log) => ({
    time: new Date(log.log_time).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    volume: Number(log.vol) || 0,
    changeRate: Number(log.change_rate) || 0,
  }))

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            tickFormatter={(value) => {
              if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`
              if (value >= 1000) return `${(value / 1000).toFixed(0)}K`
              return value.toString()
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              color: "#F9FAFB",
            }}
            formatter={(value: number) => [value.toLocaleString(), "거래량"]}
            labelFormatter={(label) => `시간: ${label}`}
          />
          <Bar
            dataKey="volume"
            fill="#3B82F6"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
