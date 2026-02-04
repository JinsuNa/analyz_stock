"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PriceChart } from "@/components/charts/price-chart"
import { VolumeChart } from "@/components/charts/volume-chart"
import { IndicatorsChart } from "@/components/charts/indicators-chart"
import { StatsCard } from "@/components/stats-card"
import type { StockLog } from "@/lib/types"

interface DashboardProps {
  data: StockLog[]
  stockName?: string
}

export function Dashboard({ data, stockName }: DashboardProps) {
  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-muted-foreground">
        <p className="text-lg">데이터가 없습니다</p>
        <p className="text-sm mt-2">종목 데이터를 추가해주세요</p>
      </div>
    )
  }

  const latestData = data[data.length - 1]
  const firstData = data[0]
  
  const priceChange = firstData.current_price 
    ? ((Number(latestData.current_price) - Number(firstData.current_price)) / Number(firstData.current_price)) * 100 
    : 0

  const totalVolume = data.reduce((sum, log) => sum + (Number(log.vol) || 0), 0)
  const avgCttr = data.reduce((sum, log) => sum + (Number(log.cttr) || 0), 0) / data.length
  const latestRsqnAccel = Number(latestData.rsqn_accel) || 0

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="현재가"
          value={Number(latestData.current_price)}
          change={Number(latestData.change_rate) || priceChange}
          suffix="원"
        />
        <StatsCard
          title="총 거래량"
          value={totalVolume}
          description="조회 기간 내 총 거래량"
        />
        <StatsCard
          title="평균 체결강도"
          value={avgCttr.toFixed(2)}
          suffix="%"
          description={avgCttr >= 100 ? "매수세 우위" : "매도세 우위"}
        />
        <StatsCard
          title="호가 가속도"
          value={latestRsqnAccel.toFixed(4)}
          description={latestRsqnAccel > 0 ? "상승 신호" : latestRsqnAccel < 0 ? "하락 신호" : "중립"}
        />
      </div>

      {/* Price Chart */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
            주가 차트
            {stockName && <span className="text-muted-foreground font-normal">- {stockName}</span>}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PriceChart data={data} />
        </CardContent>
      </Card>

      {/* Volume Chart */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-500" />
            거래량
          </CardTitle>
        </CardHeader>
        <CardContent>
          <VolumeChart data={data} />
        </CardContent>
      </Card>

      {/* Indicators */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              호가 잔량 분석
            </CardTitle>
          </CardHeader>
          <CardContent>
            <IndicatorsChart data={data} type="rsqn" />
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">호가 잔량 비율</span>
                <span className="ml-auto font-medium text-foreground">
                  {Number(latestData.rsqn_ratio)?.toFixed(4) || "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="text-muted-foreground">호가 가속도</span>
                <span className="ml-auto font-medium text-foreground">
                  {Number(latestData.rsqn_accel)?.toFixed(4) || "N/A"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-violet-500" />
              체결강도
            </CardTitle>
          </CardHeader>
          <CardContent>
            <IndicatorsChart data={data} type="cttr" />
            <div className="mt-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">현재 체결강도</span>
                <span className="font-medium text-foreground">
                  {Number(latestData.cttr)?.toFixed(2) || "N/A"}%
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                체결강도 100% 이상: 매수세가 강함 | 100% 미만: 매도세가 강함
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* State and Latest Info */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-foreground">
            최신 데이터 정보
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">상태</p>
              <p className="font-medium text-foreground mt-1">
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                  latestData.state === "TRACE" 
                    ? "bg-amber-500/20 text-amber-500" 
                    : latestData.state === "BUY"
                    ? "bg-emerald-500/20 text-emerald-500"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {latestData.state || "N/A"}
                </span>
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">기록 시간</p>
              <p className="font-medium text-foreground mt-1">
                {new Date(latestData.log_time).toLocaleString("ko-KR")}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">등락률</p>
              <p className={`font-medium mt-1 ${
                (Number(latestData.change_rate) || 0) > 0 
                  ? "text-emerald-500" 
                  : (Number(latestData.change_rate) || 0) < 0 
                  ? "text-red-500" 
                  : "text-foreground"
              }`}>
                {(Number(latestData.change_rate) || 0) > 0 ? "+" : ""}
                {Number(latestData.change_rate)?.toFixed(2) || "0.00"}%
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">데이터 수</p>
              <p className="font-medium text-foreground mt-1">{data.length}개</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
