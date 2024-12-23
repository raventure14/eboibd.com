"use client";

import { useQuery } from "@tanstack/react-query";
import { getDashboardOverview } from "@/actions/overview";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartSkeleton from "./_components/chart-skeleton";

export function Overview() {
  const { data, isLoading } = useQuery({
    queryKey: ["overview-stats"],
    queryFn: async () => {
      const res = await getDashboardOverview();
      return res.dailyRevenue;
    },
  });

  return (
    <div className="h-[350px]">
      {isLoading && <ChartSkeleton />}
      {!isLoading && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `৳ ${value}`}
            />
            <Tooltip />
            <Line
              type="bumpX"
              dataKey="revenue"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="bumpY"
              dataKey="count"
              stroke="#09d4d8"
              strokeWidth={0}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
