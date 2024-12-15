import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Order } from "@/types"
import { useOrderActions } from "@/hooks/order"

interface DataTableRowActionsProps {
  row: Row<Order>
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const { updateOrderStatus, updatePaymentStatus } = useOrderActions()
  const order = row.original

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "")}>
          Mark as Processing
        </DropdownMenuItem> */}
        <DropdownMenuItem onClick={() => updatePaymentStatus(order.id, "PENDING")}>
          Pending Payment
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "CONFIRMED")}>
          Mark as Confirmed
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateOrderStatus(order.id, "CANCELD")}>
          Mark as Cancelled
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}