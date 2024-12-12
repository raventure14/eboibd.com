"use client";

import { useSession } from "next-auth/react";
import { Header } from "./dashboard/_components/header";
import { Sidebar } from "./dashboard/_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={session?.user} />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}