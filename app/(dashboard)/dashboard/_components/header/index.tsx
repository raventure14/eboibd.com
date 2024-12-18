"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Logo } from "@/components/ui/logo";

export function Header({
  user,
}: {
  user: {
    name?: string | undefined|null;
    email?: string | undefined|null;
    role?: string | undefined|null;
  };
}) {
  return (
    <header className="bg-white shadow-sm h-16">
      <div className="h-full px-4 flex items-center justify-between">
        <Logo className="h-16 py-2" />
        <div className="flex gap-2 items-center">
          <div className="flex flex-col justify-start items-end">
            <h2 className="text-heading font-semibold text-lg" >{user.name}</h2>
            <p className="text-para text-sm font-semibold tracking-wider" >{user.role}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="font-semibold text-lg" >
                    {user?.name?.[0] || user?.email?.[0] || "A"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => signOut()}>
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
