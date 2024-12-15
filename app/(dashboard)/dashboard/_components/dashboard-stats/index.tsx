"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, ArrowUpRight, ArrowDownRight, Loader } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "@/actions/stats";
import CardSkeleton from "./_components/card-skeleton";

export function DashboardStats() {
  const { data: stats, isPending } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const res = await getDashboardStats();
      if(!res?.data) return null
      return res?.data;
    },
  });

  const items = [
    {
      title: "Total Revenue",
      value: stats?.totalRevenue || "$0",
      icon: DollarSign,
      change: "+12.5%",
      trend: "up",
    },
    {
      title: "Total Orders",
      value: stats?.totalOrders || "0",
      icon: Users,
      change: "+7.2%",
      trend: "up",
    },
    {
      title: "Pending Orders",
      value: stats?.pendingOrders || "0",
      icon: Users,
      change: "+7.2%",
      trend: "up",
    },
    {
      title: "Conversion Rate",
      value: stats?.conversion || "0%",
      icon: ArrowUpRight,
      change: "-3.1%",
      trend: "down",
    },
    {
      title: "CTA Clicks",
      value: stats?.totalClicks || "0",
      icon: ArrowUpRight,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {!isPending && items.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value} {item.title === "Conversion Rate"&&"%"} </div>
            {/* {item.trend && (
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    item.trend === "up"
                      ? "text-green-600 inline-flex items-center"
                      : "text-red-600 inline-flex items-center"
                  }
                >
                  {item.trend === "up" ? (
                    <ArrowUpRight className="mr-1 h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-4 w-4" />
                  )}
                  {item.change}
                </span>{" "}
                from last month
              </p>
            )} */}
          </CardContent>
        </Card>
      ))}
      {
        isPending && (
          items.map((item) => (
            <CardSkeleton key={item.title} />
          ))
        )
      }
    </div>
  );
}
