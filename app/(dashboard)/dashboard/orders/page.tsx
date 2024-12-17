"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "./_components/table/data-table";
import { columns } from "./_components/table/columns";
import { onGetOrders } from "@/actions/orders";
import { Order } from "@/types";
import OrderTableSkeleton from "./_components/order-skeleton";

export default function OrdersPage() {

  // Fetch orders with pagination data
  const {
    data: orders,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await onGetOrders({});

      if (res && res.orders) {
        const transformedData: Order[] = res.orders.map((item) => ({
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
      return [];
    },
  });


  return (
    <div className="space-y-6 w-[calc(100vw-256px)] mxau overflow-hidden">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
      </div>
      {isPending && <OrderTableSkeleton />}
      {orders && (
        <DataTable
          columns={columns}
          data={orders}
        />
      )}
    </div>
  );
}
