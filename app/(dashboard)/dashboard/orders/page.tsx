"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { OrdersTable } from "./_components/orders-table";

export default function OrdersPage() {
  const [customerFilter, setCustomerFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<Date>();

  const { data: orders, refetch } = useQuery({
    queryKey: ["orders", customerFilter, statusFilter, dateFilter],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (customerFilter) params.append("customer", customerFilter);
      if (statusFilter) params.append("status", statusFilter);
      if (dateFilter) params.append("date", dateFilter.toISOString());

      const res = await fetch(`/api/orders?${params.toString()}`);
      return res.json();
    },
  });

  const handleStatusUpdate = async () => {
    await refetch();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      </div>

      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search by customer name..."
          value={customerFilter}
          onChange={(e) => setCustomerFilter(e.target.value)}
          className="max-w-xs"
        />

        <Select
          value={statusFilter || undefined}
          onValueChange={setStatusFilter}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CONFIRMED">Confirmed</SelectItem>
            <SelectItem value="FAILED">Failed</SelectItem>
            <SelectItem value="CANCELED">Canceled</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[200px] justify-start text-left font-normal",
                !dateFilter && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateFilter ? format(dateFilter, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateFilter}
              onSelect={setDateFilter}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          onClick={() => {
            setCustomerFilter("");
            setStatusFilter(null);
            setDateFilter(undefined);
          }}
        >
          Reset Filters
        </Button>
      </div>

      <OrdersTable orders={orders} onStatusUpdate={handleStatusUpdate} />
    </div>
  );
}