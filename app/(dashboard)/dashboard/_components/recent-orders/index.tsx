"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { onGetResentOrders } from "@/actions/orders";

export function RecentOrders() {
  const { data: orders } = useQuery({
    queryKey: ["recent-orders"],
    queryFn: async () => {
      const res = await onGetResentOrders()
      return res.recentOrders;
    },
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.customerName}</TableCell>
            <TableCell>{order.customerEmail}</TableCell>
            <TableCell>
              <Badge
                variant={
                  order.orderStatus === "CONFIRMED"
                    ? "success"
                    : order.orderStatus === "FAILED"
                    ? "destructive"
                    : "secondary"
                }
              >
                {order.orderStatus}
              </Badge>
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