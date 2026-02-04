"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from "recharts"
import type { StockLog } from "@/lib/types"

interface IndicatorsChartProps {
  data: StockLog[]
  type: "rsqn" | "cttr"
}

export function IndicatorsChart({ data, type }: IndicatorsChartProps) {
  const chartData = data.map((log) => ({
    time: new Date(log.log_time).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    rsqnRatio: Number(log.rsqn_ratio) || 0,
    rsqnAccel: Number(log.rsqn_accel) || 0,
    cttr: Number(log.cttr) || 0,
  }))

  if (type === "rsqn") {
    return (
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={11} tickLine={false} />
            <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#F9FAFB",
              }}
              labelFormatter={(label) => `시간: ${label}`}
            />
            <Legend 
              wrapperStyle={{ color: "#9CA3AF" }}
              formatter={(value) => {
                if (value === "rsqnRatio") return "호가 잔량 비율"
                if (value === "rsqnAccel") return "호가 가속도"
                return value
              }}
            />
            <ReferenceLine y={1} stroke="#6B7280" strokeDasharray="5 5" />
            <Line
              type="monotone"
              dataKey="rsqnRatio"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={false}
              name="rsqnRatio"
            />
            <Line
              type="monotone"
              dataKey="rsqnAccel"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
              name="rsqnAccel"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="time" stroke="#9CA3AF" fontSize={11} tickLine={false} />
          <YAxis stroke="#9CA3AF" fontSize={11} tickLine={false} domain={[0, 200]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              border: "1px solid #374151",
              borderRadius: "8px",
              color: "#F9FAFB",
            }}
            formatter={(value: number) => [`${value.toFixed(2)}%`, "체결강도"]}
            labelFormatter={(label) => `시간: ${label}`}
          />
          <ReferenceLine y={100} stroke="#6B7280" strokeDasharray="5 5" label={{ value: "100%", fill: "#6B7280", fontSize: 11 }} />
          <Line
            type="monotone"
            dataKey="cttr"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
