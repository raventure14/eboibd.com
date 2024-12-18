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
  if (!session)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader className="animate-spin h-20 w-20" />
      </div>
    );
  return (
    <div className="min-h-screen bg-gray-100">
      <Header user={session?.user!} />
      <Sidebar className="min-h-screen z-40" />
      <div className="w-full  flex justify-end ">
        <main className="w-full flex justify-end z-20  p-6">{children}</main>
      </div>
    </div>
  );
}
