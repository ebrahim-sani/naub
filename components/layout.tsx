"use client";
import * as React from "react";
import {
   LayoutDashboard,
   FilePlus2,
   Settings,
   HelpCircle,
   GraduationCap,
   ScrollText,
   FileStack,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { TooltipProvider } from "./ui/tooltip";
import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from "./ui/resizable";

import { Separator } from "./ui/separator";
import { AccountSwitcher } from "./account-switcher";
import { Nav } from "./sidebar";

interface LayoutProps {
   accounts: {
      label: string;
      email: string;
      icon?: React.ReactNode;
   }[];
   defaultLayout: number[] | undefined;
   defaultCollapsed?: boolean;
   navCollapsedSize: number;
   children: React.ReactNode;
}

export function Layout({
   accounts,
   defaultLayout = [265, 440, 655],
   defaultCollapsed = false,
   navCollapsedSize,
   children,
}: LayoutProps) {
   const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

   return (
      <TooltipProvider delayDuration={0}>
         <ResizablePanelGroup
            direction="horizontal"
            onLayout={(sizes: number[]) => {
               document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                  sizes,
               )}`;
            }}
            className="flex h-screen items-stretch overflow-hidden"
         >
            {/* sidebar */}
            <ResizablePanel
               defaultSize={defaultLayout[0]}
               collapsedSize={navCollapsedSize}
               collapsible={true}
               minSize={15}
               maxSize={20}
               // @ts-ignore
               onCollapse={(collapsed) => {
                  setIsCollapsed(collapsed);
                  document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                     collapsed,
                  )}`;
               }}
               className={cn(
                  isCollapsed &&
                     "fixed left-0 top-0 h-screen min-w-[50px] transition-all duration-300 ease-in-out",
               )}
            >
               <div
                  className={cn(
                     "flex h-[52px] items-center justify-center",
                     isCollapsed ? "h-[52px]" : "px-2",
                  )}
               >
                  <AccountSwitcher
                     isCollapsed={isCollapsed}
                     accounts={accounts}
                  />
               </div>
               <Separator />
               <Nav
                  isCollapsed={isCollapsed}
                  links={[
                     {
                        title: "Dashboard",
                        label: "",
                        icon: LayoutDashboard,
                        variant: "default",
                     },
                     {
                        title: "Course Registration",
                        label: "",
                        icon: FilePlus2,
                        variant: "ghost",
                     },
                     {
                        title: "Results",
                        label: "",
                        icon: ScrollText,
                        variant: "ghost",
                     },
                     {
                        title: "Documents",
                        label: "",
                        icon: FileStack,
                        variant: "ghost",
                     },
                  ]}
               />
               <Separator />
               <Nav
                  isCollapsed={isCollapsed}
                  links={[
                     {
                        title: "E-Learn",
                        label: "",
                        icon: GraduationCap,
                        variant: "ghost",
                     },
                     {
                        title: "Help",
                        label: "",
                        icon: HelpCircle,
                        variant: "ghost",
                     },
                     {
                        title: "Settings",
                        label: "",
                        icon: Settings,
                        variant: "ghost",
                     },
                  ]}
               />
            </ResizablePanel>
            <ResizableHandle withHandle />
            {children}
         </ResizablePanelGroup>
      </TooltipProvider>
   );
}
