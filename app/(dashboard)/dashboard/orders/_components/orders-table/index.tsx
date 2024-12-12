"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Order {
  id: string;
  customerName: string;
  status: "CONFIRMED" | "FAILED" | "CANCELED";
  amount: number;
  createdAt: string;
}

interface OrdersTableProps {
  orders: Order[];
  onStatusUpdate: () => void;
}

export function OrdersTable({ orders = [], onStatusUpdate }: OrdersTableProps) {
  const [updating, setUpdating] = useState<string | null>(null);

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    setUpdating(orderId);
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update status");
      onStatusUpdate();
    } catch (error) {
      console.error("Error updating order status:", error);
    } finally {
      setUpdating(null);
    }
  };

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return "default";
      case "FAILED":
        return "destructive";
      case "CANCELED":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>
              {format(new Date(order.createdAt), "MMM dd, yyyy")}
            </TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>
              <Select
                value={order.status}
                onValueChange={(value) => handleStatusChange(order.id, value)}
                disabled={updating === order.id}
              >
                <SelectTrigger className="w-[130px]">
                  <SelectValue>
                    <Badge variant={getBadgeVariant(order.status)}>
                      {order.status}
                    </Badge>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CONFIRMED">CONFIRMED</SelectItem>
                  <SelectItem value="FAILED">FAILED</SelectItem>
                  <SelectItem value="CANCELED">CANCELED</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
            <TableCell className="text-right">
              ${order.amount.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}