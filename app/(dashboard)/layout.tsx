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
    <div className="max-h-(calc-90px) bg-gray-100 overflow-hidden ">
      <Header user={session?.user} />
      <div className="flex ">
        <Sidebar />
        <main className="flex-1 max-h-full overflow-y-hidden p-6">{children}</main>
      </div>
    </div>
  );
}