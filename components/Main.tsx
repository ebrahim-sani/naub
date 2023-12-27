"use client";

import { ResizablePanel } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DashInfo from "./DashInfo";

export default function Main({ defaultLayout }: { defaultLayout: number[] }) {
   return (
      <ResizablePanel
         className="flex flex-col h-screen"
         defaultSize={defaultLayout[1]}
         minSize={30}
      >
         <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Dashboard</h1>

            <div className="ml-auto">
               <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
            </div>
         </div>
         <Separator />

         <div className="flex flex-1 w-full px-4 py-2">
            <DashInfo />
         </div>
      </ResizablePanel>
   );
}
