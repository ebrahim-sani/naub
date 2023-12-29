"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";

interface NavProps {
   links: {
      title: string;
      pathname: string;
      icon: LucideIcon;
   }[];
}

export function Nav({ links }: NavProps) {
   const pathname = usePathname();
   // console.log(pathname);

   return (
      <div className="group flex flex-col gap-4 py-2 w-full">
         <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center w-full">
            {links.map((link, index) => (
               <Link
                  key={index}
                  href={`${link.pathname}`}
                  className={cn(
                     buttonVariants({
                        variant:
                           link.pathname === pathname ? "default" : "ghost",
                        size: "sm",
                     }),
                     link.pathname === pathname
                        ? "bg-primary text-white"
                        : "dark:bg-muted dark:text-gray-600 dark:hover:bg-muted dark:hover:text-gray-500",
                     "justify-start",
                  )}
               >
                  <link.icon
                     className={`mr-2 h-4 w-4 text ${
                        link.pathname === pathname && "text-white"
                     }`}
                  />
                  {link.title}
               </Link>
            ))}
         </nav>
      </div>
   );
}
