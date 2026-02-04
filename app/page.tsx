"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { Activity, BarChart3, TrendingUp, TrendingDown, Volume2 } from "lucide-react"

// Mock data
const mockStockData = [
  { id: 1, stock_name: "우리기술", current_price: 4750, rsqn_ratio: 1.2534, rsqn_accel: 0.0245, change_rate: 2.37, cttr: 112.45, vol: 125000, state: "TRACE", log_time: "2025-02-04T09:00:00Z" },
  { id: 2, stock_name: "우리기술", current_price: 4785, rsqn_ratio: 1.3102, rsqn_accel: 0.0312, change_rate: 3.12, cttr: 118.32, vol: 142300, state: "TRACE", log_time: "2025-02-04T09:01:00Z" },
  { id: 3, stock_name: "우리기술", current_price: 4820, rsqn_ratio: 1.4215, rsqn_accel: 0.0428, change_rate: 3.87, cttr: 125.67, vol: 185200, state: "TRACE", log_time: "2025-02-04T09:02:00Z" },
  { id: 4, stock_name: "우리기술", current_price: 4890, rsqn_ratio: 1.5623, rsqn_accel: 0.0587, change_rate: 5.38, cttr: 134.21, vol: 245800, state: "BUY", log_time: "2025-02-04T09:03:00Z" },
  { id: 5, stock_name: "우리기술", current_price: 4925, rsqn_ratio: 1.4892, rsqn_accel: 0.0456, change_rate: 6.13, cttr: 128.45, vol: 198500, state: "BUY", log_time: "2025-02-04T09:04:00Z" },
  { id: 6, stock_name: "우리기술", current_price: 4880, rsqn_ratio: 1.3245, rsqn_accel: 0.0234, change_rate: 5.16, cttr: 115.78, vol: 165400, state: "TRACE", log_time: "2025-02-04T09:05:00Z" },
  { id: 7, stock_name: "우리기술", current_price: 4915, rsqn_ratio: 1.4102, rsqn_accel: 0.0378, change_rate: 5.92, cttr: 122.34, vol: 178900, state: "TRACE", log_time: "2025-02-04T09:06:00Z" },
  { id: 8, stock_name: "우리기술", current_price: 4965, rsqn_ratio: 1.5234, rsqn_accel: 0.0512, change_rate: 6.99, cttr: 131.56, vol: 225600, state: "BUY", log_time: "2025-02-04T09:07:00Z" },
  { id: 9, stock_name: "우리기술", current_price: 4940, rsqn_ratio: 1.3856, rsqn_accel: 0.0298, change_rate: 6.45, cttr: 118.92, vol: 156700, state: "TRACE", log_time: "2025-02-04T09:08:00Z" },
  { id: 10, stock_name: "우리기술", current_price: 4985, rsqn_ratio: 1.4678, rsqn_accel: 0.0423, change_rate: 7.42, cttr: 126.78, vol: 198400, state: "TRACE", log_time: "2025-02-04T09:09:00Z" },
  { id: 11, stock_name: "우리기술", current_price: 5025, rsqn_ratio: 1.5891, rsqn_accel: 0.0612, change_rate: 8.28, cttr: 138.45, vol: 268900, state: "BUY", log_time: "2025-02-04T09:10:00Z" },
  { id: 12, stock_name: "우리기술", current_price: 5010, rsqn_ratio: 1.4523, rsqn_accel: 0.0356, change_rate: 7.96, cttr: 121.34, vol: 178500, state: "TRACE", log_time: "2025-02-04T09:11:00Z" },
]

export default function Home() {
  const data = mockStockData
  const latestData = data[data.length - 1]
  const firstData = data[0]
  
  const priceChange = ((latestData.current_price - firstData.current_price) / firstData.current_price) * 100
  const totalVolume = data.reduce((sum, log) => sum + log.vol, 0)
  const avgCttr = data.reduce((sum, log) => sum + log.cttr, 0) / data.length

  const chartData = data.map((log) => ({
    time: new Date(log.log_time).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    price: log.current_price,
    vol: log.vol,
    cttr: log.cttr,
  }))

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500/20">
                <BarChart3 className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h1 className="text-lg font-bold">주식 분석</h1>
                <p className="text-xs text-slate-400">실시간 데이터 분석</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Activity className="h-4 w-4 text-emerald-500 animate-pulse" />
              <span>우리기술</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                <TrendingUp className="h-4 w-4" />
                현재가
              </div>
              <p className="text-2xl font-bold text-slate-100">{latestData.current_price.toLocaleString()}원</p>
              <p className="text-sm text-emerald-500">+{priceChange.toFixed(2)}%</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                <Volume2 className="h-4 w-4" />
                총 거래량
              </div>
              <p className="text-2xl font-bold text-slate-100">{totalVolume.toLocaleString()}</p>
              <p className="text-sm text-slate-400">조회 기간 내</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                <Activity className="h-4 w-4" />
                평균 체결강도
              </div>
              <p className="text-2xl font-bold text-slate-100">{avgCttr.toFixed(2)}%</p>
              <p className="text-sm text-emerald-500">매수세 우위</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                <TrendingUp className="h-4 w-4" />
                호가 가속도
              </div>
              <p className="text-2xl font-bold text-slate-100">{latestData.rsqn_accel.toFixed(4)}</p>
              <p className="text-sm text-emerald-500">상승 신호</p>
            </CardContent>
          </Card>
        </div>

        {/* Price Chart */}
        <Card className="bg-slate-900 border-slate-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              주가 차트 - 우리기술
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={11} 
                    tickLine={false}
                    tickFormatter={(value) => value.toLocaleString()}
                    domain={['dataMin - 50', 'dataMax + 50']}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#f1f5f9",
                    }}
                    formatter={(value: number) => [value.toLocaleString() + "원", "현재가"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: "#10b981" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Volume Chart */}
        <Card className="bg-slate-900 border-slate-800 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              거래량
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={11} 
                    tickLine={false}
                    tickFormatter={(value) => (value / 1000).toFixed(0) + "K"}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#f1f5f9",
                    }}
                    formatter={(value: number) => [value.toLocaleString(), "거래량"]}
                  />
                  <Bar dataKey="vol" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* CTTR Chart */}
        <Card className="bg-slate-900 border-slate-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-violet-500" />
              체결강도
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[80, 150]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "1px solid #334155",
                      borderRadius: "8px",
                      color: "#f1f5f9",
                    }}
                    formatter={(value: number) => [value.toFixed(2) + "%", "체결강도"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="cttr"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: "#8b5cf6" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              체결강도 100% 이상: 매수세가 강함 | 100% 미만: 매도세가 강함
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/30 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-slate-500">
            주식 분석 대시보드 - 투자는 신중하게
          </p>
        </div>
      </footer>
    </main>
  )
}
