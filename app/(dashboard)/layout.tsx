
import { Header } from "./dashboard/_components/header";
import MobileBottomBar from "./dashboard/_components/mobile-bottombar";
import { Sidebar } from "./dashboard/_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden ">
      <Header  />
      <Sidebar className="lg:min-h-screen z-40" />
      <div className="w-full  flex justify-end ">
        <main className="w-full flex justify-end z-20  p-6">{children}</main>
      </div>
      <MobileBottomBar />
    </div>
  );
}
