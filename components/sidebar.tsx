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
   const new_course_reg_path = "/dashboard/course-registration/new";
   // console.log(new_course_reg_path);

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
                           link.pathname === pathname
                              ? "default"
                              : link.pathname === new_course_reg_path
                              ? "default"
                              : "secondary",
                        size: "sm",
                     }),
                     "justify-start",
                  )}
               >
                  <link.icon
                     className={`mr-2 h-4 w-4 text ${
                        link.pathname === pathname && "text-gray-100"
                     }`}
                  />
                  {link.title}
               </Link>
            ))}
         </nav>
      </div>
   );
}
