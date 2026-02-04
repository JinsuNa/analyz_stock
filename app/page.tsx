import { Suspense } from "react"
import { getStockLogs, getStockNames } from "@/lib/stock-data"
import { Dashboard } from "@/components/dashboard"
import { StockSelector } from "@/components/stock-selector"
import { Activity, BarChart3 } from "lucide-react"

interface PageProps {
  searchParams: Promise<{ stock?: string }>
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams
  const stockName = params.stock
  
  const [stockLogs, stockNames] = await Promise.all([
    getStockLogs(stockName, 200),
    getStockNames(),
  ])

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">주식 분석</h1>
                <p className="text-xs text-muted-foreground">실시간 데이터 분석</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="h-4 w-4 text-emerald-500 animate-pulse" />
                <span>실시간</span>
              </div>
              <Suspense fallback={<div className="w-[200px] h-10 bg-muted animate-pulse rounded-md" />}>
                <StockSelector stocks={stockNames} currentStock={stockName} />
              </Suspense>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard data={stockLogs} stockName={stockName} />
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>주식 분석 대시보드 - 투자는 신중하게</p>
            <p>데이터 갱신: {new Date().toLocaleString("ko-KR")}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
