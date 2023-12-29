import {
   LayoutDashboard,
   FilePlus2,
   Settings,
   HelpCircle,
   GraduationCap,
   ScrollText,
   FileStack,
} from "lucide-react";

export const GroupOneNav = [
   {
      title: "Dashboard",
      icon: LayoutDashboard,
      pathname: "/dashboard",
   },
   {
      title: "Course Registration",
      icon: FilePlus2,
      pathname: "/dashboard/course-registration",
   },
   {
      title: "Results",
      icon: ScrollText,
      pathname: "/dashboard/results",
   },
   {
      title: "Documents",
      icon: FileStack,
      pathname: "/dashboard/documents",
   },
];

export const GroupTwoNav = [
   {
      title: "E-Learn",
      pathname: "/dashboard/e-learn",
      icon: GraduationCap,
   },
   {
      title: "Help",
      pathname: "/dashboard/help",
      icon: HelpCircle,
   },
   {
      title: "Settings",
      pathname: "/dashboard/settings",
      icon: Settings,
   },
];
