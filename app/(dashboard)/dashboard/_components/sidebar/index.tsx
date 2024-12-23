"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShoppingCart,
  Settings,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";

export const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
];

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        " flex-col w-64 md:bg-white md:border-r fixed top-0 left-0 right-0 z-50 lg:flex h-full items-start justify-between border-b bg-background px-4 hidden lg:visible ",
        className
      )}
    >
      <Logo className="h-16 py-2" />
      <div className="flex-1 flex flex-col pt-5 pb-4 justify-between overflow-y-auto">
        <nav className="mt-5 flex-1  space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  pathname === item.href
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <Icon
                  className={cn(
                    pathname === item.href
                      ? "text-gray-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 h-5 w-5"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <Link
          href={"/dashboard/settings"}
          className={cn(
            pathname === "/dashboard/settings"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          )}
        >
          <Settings
            className={cn(
              pathname === "/dashboard/settings"
                ? "text-gray-500"
                : "text-gray-400 group-hover:text-gray-500",
              "mr-3 h-5 w-5"
            )}
          />
          Settings
        </Link>
      </div>
    </div>
  );
}
