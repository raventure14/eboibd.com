"use client";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Order } from "@/types";
import { useOrderActions } from "@/hooks/order";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import LoadingCard from "@/components/global/loading-card";
import { toast } from "sonner";

interface DataTableRowActionsProps {
  row: Row<Order>;
}
const loadingStates = [
  {
    text: "Updating Order Status",
  },
  {
    text: "Updating Payment Status",
  },
  {
    text: "Sending Email",
  },
];
export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const { updateOrderStatus, isUpdating, loadingText } =
    useOrderActions();
  const order = row.original;

  return (
    <>
      {/* <MultiStepLoader loading={isUpdating} loadingStates={loadingStates} /> */}
      <LoadingCard isVisible={isUpdating} text={loadingText} />
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
          <DropdownMenuItem
            onClick={() =>
              updateOrderStatus(order.id, "CONFIRMED", {
                customerEmail: order.customerEmail,
                customerName: order.customerName,
                bookTitle: order.bookName,
                bookId: order.id,
                bookName: order.bookName,
              })
            }
          >
            Mark as Delever
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
