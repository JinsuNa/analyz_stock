"use client"

import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface StockSelectorProps {
  stocks: string[]
  currentStock?: string
}

export function StockSelector({ stocks, currentStock }: StockSelectorProps) {
  const router = useRouter()

  const handleChange = (value: string) => {
    if (value === "all") {
      router.push("/")
    } else {
      router.push(`/?stock=${encodeURIComponent(value)}`)
    }
  }

  return (
    <Select value={currentStock || "all"} onValueChange={handleChange}>
      <SelectTrigger className="w-[200px] bg-card border-border">
        <SelectValue placeholder="종목 선택" />
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        <SelectItem value="all">전체 종목</SelectItem>
        {stocks.map((stock) => (
          <SelectItem key={stock} value={stock}>
            {stock}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
