"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { navigation } from "../sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react";
import { TooltipContent } from "@/components/ui/tooltip";

const MobileBottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full overflow-hidden h-16 bg-white border-t z-50 flex gap-4 justify-center items-center lg:hidden">
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
                " h-5 w-5"
              )}
            />
          </Link>
        );
      })}
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
            "h-5 w-5"
          )}
        />
      </Link>
    </div>
  );
};

export default MobileBottomBar;
