"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardStats } from "./_components/dashboard-stats";
import { Overview } from "./_components/overviews";
import { RecentOrders } from "./_components/recent-orders";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader className="animate-spin h-20 w-20" />
      </div>
    );
  return (
    <div className="space-y-6 w-full lg:w-[calc(100vw-335px)]">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <DashboardStats />
      <div className="grid gap-6 grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Overview />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
