import { Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Order } from "@/types"
import { DataTableFacetedFilter } from "../data-table-faceted-filter"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter orders..."
          value={(table.getColumn("customerName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("customerName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("paymentStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("paymentStatus")}
            title="Payment Status"
            options={[
              { label: "Pending", value: "pending" },
              { label: "Confirmed", value: "confirmed" },
              { label: "Failed", value: "failed" },
            ]}
          />
        )}
        {table.getColumn("orderStatus") && (
          <DataTableFacetedFilter
            column={table.getColumn("orderStatus")}
            title="Order Status"
            options={[
              { label: "Pending", value: "pending" },
              { label: "Processing", value: "processing" },
              { label: "Completed", value: "completed" },
              { label: "Cancelled", value: "cancelled" },
            ]}
          />
        )}
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  )
}