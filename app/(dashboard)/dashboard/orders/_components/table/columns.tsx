import { ColumnDef } from "@tanstack/react-table"
import { Order } from "@/types"
import { format } from "date-fns"
import { DataTableColumnHeader } from "./_components/data-table-column-header"
import { DataTableRowActions } from "./_components/data-table-row-action"

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "customerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
  },
  {
    accessorKey: "customerEmail",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Email" />
    ),
  },
  {
    accessorKey: "bookName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Book Name" />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("bn-BD", {
        style: "currency",
        currency: "BDT",
      }).format(amount)
      return formatted
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => format(new Date(row.getValue("createdAt")), "PPP"),
  },
  {
    accessorKey: "paymentStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Status" />
    ),
  },
  {
    accessorKey: "orderStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order Status" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]