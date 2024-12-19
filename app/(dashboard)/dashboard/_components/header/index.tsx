"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User } from "lucide-react";

export function Header({
  user,
}: {
  user: {
    name?: string | undefined | null;
    email?: string | undefined | null;
    role?: string | undefined | null;
  };
}) {
  // return (
  //   <header className="bg-white shadow-sm h-16 fixed top-0 right-0 w-[calc(100vw-275px)] z-50">
  //     <div className="h-full px-4 flex items-center justify-end">
  //       <div className="flex gap-2 items-center">
  //         <div className="flex flex-col justify-start items-end">
  //           <h2 className="text-heading font-semibold text-lg">{user.name}</h2>
  //           <p className="text-para text-sm font-semibold tracking-wider">
  //             {user.role}
  //           </p>
  //         </div>
  //         {/* <DropdownMenu  >
  //           <DropdownMenuTrigger className="mx-32"  asChild>
  //             <Button variant="ghost" className="relative h-8 w-8 rounded-full">
  //               <Avatar className="h-10 w-10">
  //                 <AvatarFallback className="font-semibold text-lg" >
  //                   {user?.name?.[0] || user?.email?.[0] || "A"}
  //                 </AvatarFallback>
  //               </Avatar>
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end" className="right-20">
  //             <DropdownMenuItem onClick={() => signOut()}>
  //               Sign out
  //             </DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu> */}
  //         <div className="flex items-center gap-4">
  //           <Button variant="ghost" size="icon">
  //             <Bell className="h-4 w-4" />
  //             <span className="sr-only">Notifications</span>
  //           </Button>
  //           <DropdownMenu>
  //             <DropdownMenuTrigger asChild>
  //               <Button
  //                 variant="ghost"
  //                 className="relative h-8 w-8 rounded-full"
  //               >
  //                 <Avatar className="h-8 w-8">
  //                   <AvatarImage src="/avatars/01.png" alt="@username" />
  //                   <AvatarFallback>AN</AvatarFallback>
  //                 </Avatar>
  //               </Button>
  //             </DropdownMenuTrigger>
  //             <DropdownMenuContent className="w-56" align="end" forceMount>
  //               <DropdownMenuLabel className="font-normal">
  //                 <div className="flex flex-col space-y-1">
  //                   <p className="text-sm font-medium leading-none">
  //                     Abdun Noor Faruki Biswas
  //                   </p>
  //                   <p className="text-xs leading-none text-muted-foreground">
  //                     admin@example.com
  //                   </p>
  //                 </div>
  //               </DropdownMenuLabel>
  //               <DropdownMenuSeparator />
  //               <DropdownMenuItem>
  //                 <User className="mr-2 h-4 w-4" />
  //                 <span>Profile</span>
  //               </DropdownMenuItem>
  //               <DropdownMenuItem>Log out</DropdownMenuItem>
  //             </DropdownMenuContent>
  //           </DropdownMenu>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );
  return (
    <header className="fixed top-0  right-0 w-[calc(100vw-275px)] z-50 flex h-16 items-center justify-end border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-4">
      <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.role}
            </p>
          </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@username" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  Abdun Noor Faruki Biswas
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  admin@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut()}
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
