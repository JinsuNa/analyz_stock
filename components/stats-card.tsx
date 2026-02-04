import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  change?: number
  suffix?: string
  description?: string
}

export function StatsCard({ title, value, change, suffix, description }: StatsCardProps) {
  const isPositive = change !== undefined && change > 0
  const isNegative = change !== undefined && change < 0

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-end gap-2 mt-1">
          <p className="text-2xl font-bold text-foreground">
            {typeof value === "number" ? value.toLocaleString() : value}
            {suffix && <span className="text-lg font-normal text-muted-foreground ml-1">{suffix}</span>}
          </p>
          {change !== undefined && (
            <div
              className={cn(
                "flex items-center gap-0.5 text-sm font-medium",
                isPositive && "text-emerald-500",
                isNegative && "text-red-500",
                !isPositive && !isNegative && "text-muted-foreground"
              )}
            >
              {isPositive ? (
                <TrendingUp className="h-4 w-4" />
              ) : isNegative ? (
                <TrendingDown className="h-4 w-4" />
              ) : (
                <Minus className="h-4 w-4" />
              )}
              <span>{change > 0 ? "+" : ""}{change.toFixed(2)}%</span>
            </div>
          )}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}
