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
      pathname: "/s/dashboard",
   },
   {
      title: "Course Registration",
      icon: FilePlus2,
      pathname: "/s/dashboard/course-registration",
   },
   {
      title: "Results",
      icon: ScrollText,
      pathname: "/s/dashboard/results",
   },
   {
      title: "Documents",
      icon: FileStack,
      pathname: "/s/dashboard/documents",
   },
];

export const GroupTwoNav = [
   {
      title: "E-Learn",
      pathname: "/s/dashboard/e-learn",
      icon: GraduationCap,
   },
   {
      title: "Help",
      pathname: "/s/dashboard/help",
      icon: HelpCircle,
   },
   {
      title: "Settings",
      pathname: "/s/dashboard/settings",
      icon: Settings,
   },
];
