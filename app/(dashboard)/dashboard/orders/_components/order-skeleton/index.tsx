'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { motion } from 'framer-motion'

export default function OrderTableSkeleton() {
  // Create an array of 5 items to match the example
  const rows = Array(5).fill(null)

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">
              <Skeleton className="h-6 w-32 bg-gray-200 " />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-6 w-36 bg-gray-200 " />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-6 w-28 bg-gray-200 " />
            </th>
            <th className="p-4 text-left">
            <Skeleton className="h-6 w-24 bg-gray-200 " />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-6 w-32 bg-gray-200 " />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-6 w-32 bg-gray-200 " />
            </th>
            <th className="p-4 text-left">
              <Skeleton className="h-6 w-32 bg-gray-200 " />
            </th>
            <th className="w-10 p-4"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((_, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4">
                <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
              </td>
              <td className="p-4">
                <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
              </td>
              <td className="p-4">
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
              </td>
              <td className="p-4">
                <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
              </td>
              <td className="p-4">
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
              </td>
              <td className="p-4">
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
              </td>
              <td className="p-4">
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
              </td>
              <td className="p-4">
                <div className="h-5 w-6 bg-gray-200 rounded animate-pulse" />
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center gap-2">
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="flex gap-1">
            {Array(4).fill(null).map((_, index) => (
              <div key={index} className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

