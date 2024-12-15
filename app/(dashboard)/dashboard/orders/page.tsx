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
import { DataTable } from "./_components/table/data-table";
import { columns } from "./_components/table/columns";
import { onGetOrders } from "@/actions/orders";
import { Order, OrderResponse } from "@/types";

export default function OrdersPage() {
  const [customerFilter, setCustomerFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<Date|null>(null);
  

  const { data: orders, refetch } = useQuery({
    queryKey: ["orders", customerFilter, statusFilter, dateFilter],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (customerFilter) params.append("customer", customerFilter);
      if (statusFilter) params.append("status", statusFilter);
      if (dateFilter) params.append("date", dateFilter.toISOString());

      const res = await onGetOrders({});
      const orders = res.orders;
      if (orders) {
        const transformedData: Order[] = orders.map((item) => ({
          id: item.id,
          customerName: item.customerName,
          customerEmail: item.customerEmail,
          customerPhone: item.customerPhone,
          amount: item.amount,
          paymentMethod: item.paymentMethod,
          bookName: item.book.name,
          paymentStatus: item.paymentStatus,
          orderStatus: item.orderStatus,
          userAgreement: item.userAgreement,
          createdAt: item.createdAt,
          transactionId: item.transactionId,
        }));
        return transformedData;
      }
      if (res.status === 404) return null;
    },
  });

  console.log(orders);

  const handleStatusUpdate = async () => {
    await refetch();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      </div>

      {orders && <DataTable columns={columns} data={orders} />}
    </div>
  );
}
