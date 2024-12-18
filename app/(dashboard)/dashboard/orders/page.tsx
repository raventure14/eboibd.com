"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./_components/table/data-table";
import { columns } from "./_components/table/columns";
import { onGetOrders } from "@/actions/orders";
import { Order } from "@/types";
import OrderTableSkeleton from "./_components/order-skeleton";

export default function OrdersPage() {

  const { data: orders, refetch, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const params = new URLSearchParams();
      // if (customerFilter) params.append("customer", customerFilter);
      // if (statusFilter) params.append("status", statusFilter);
      // if (dateFilter) params.append("date", dateFilter.toISOString());

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
      if (res.status !== 200) return undefined;
    },
  });

  return (
    <div className="space-y-6 max-h-full ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      </div>
      {isLoading && (
        <OrderTableSkeleton/>
      )}
      {orders && <DataTable columns={columns} data={orders}  />}
    </div>
  );
}
