"use client";
import * as React from "react";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Separator } from "./ui/separator";
import { AccountSwitcher } from "./account-switcher";
import { Nav } from "./sidebar";
import { usePathname } from "next/navigation";
import { GroupOneNav, GroupTwoNav } from "@/constant/data";

interface LayoutProps {
   accounts: {
      label: string;
      email: string;
      icon?: React.ReactNode;
   }[];
   children: React.ReactNode;
}

export function Layout({ accounts, children }: LayoutProps) {
   const pathname = usePathname();
   // console.log(pathname);

   const formatedPathname = (path: string) => {
      const split_url = path.split("/");
      const lastIndex = split_url.length - 1;
      const pathname = split_url[lastIndex].replace("-", " ");
      const formatName = pathname.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
         letter.toUpperCase(),
      );
      return formatName;
   };
   return (
      <div className="flex h-full items-start w-screen">
         <div className="hidden lg:flex flex-col items-start h-screen w-[18%] transition-all duration-300 ease-in-out">
            <div className="flex h-[52px] items-center justify-center px-2 my-[2px] w-full">
               <AccountSwitcher accounts={accounts} />
            </div>
            <Separator />
            <Nav links={GroupOneNav} />
            <Separator />
            <Nav links={GroupTwoNav} />
         </div>
         <div className="flex flex-col items-start gap-2 h-full w-full">
            <div className="flex items-center justify-between px-4 py-1 w-full">
               <h1 className="text-lg font-bold">
                  {formatedPathname(pathname)}
               </h1>

               <div className="ml-auto">
                  <Avatar>
                     <AvatarImage src="https://github.com/shadcn.png" />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
               </div>
            </div>
            <Separator />
            {children}
         </div>
      </div>
   );
}
