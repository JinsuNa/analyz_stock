"use client"

import { useRouter, useSearchParams } from "next/navigation"
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
  const searchParams = useSearchParams()

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all") {
      params.delete("stock")
    } else {
      params.set("stock", value)
    }
    router.push(`/?${params.toString()}`)
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
