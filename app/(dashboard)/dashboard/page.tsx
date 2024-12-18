"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardStats } from "./_components/dashboard-stats";
import { Overview } from "./_components/overviews";
import { RecentOrders } from "./_components/recent-orders";


export default function DashboardPage() {
  return (
    <div className="space-y-6 w-[calc(100vw-335px)]">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <DashboardStats />
      <div className="grid gap-6 md:grid-cols-2">
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