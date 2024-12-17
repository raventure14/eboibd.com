"use client";

import { useSession } from "next-auth/react";
import { Header } from "./dashboard/_components/header";
import { Sidebar } from "./dashboard/_components/sidebar";
import { Loader } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  if(!session) return (
    <div className="h-screen w-full flex justify-center items-center"><Loader className="animate-spin h-20 w-20" /></div>
  )
  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={session?.user!} />
      <div className="flex ">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}