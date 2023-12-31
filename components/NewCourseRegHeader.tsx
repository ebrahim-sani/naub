"use client";

import { Save } from "lucide-react";
import { Button } from "./ui/button";
import { useCourseStore } from "@/lib/states/course-reg-state";
import { useSemesterStore } from "@/lib/states/semester-state";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function NewCourseRegHeader() {
   const { courses, reset } = useCourseStore();
   const { semester, clearSemester } = useSemesterStore();

   const router = useRouter();

   const handleClick = async () => {
      try {
         const res = await fetch("/api/course-reg", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               semester,
               courses,
               session: "2023/2024",
            }),
         });

         if (res.status === 400) {
            toast.error("No semester selected!");
         }
         if (res.ok) {
            toast.success("Registration successful");
            router.push("/dashboard/course-registration");
            reset();
            clearSemester();
         }
      } catch (e) {
         console.log("Failed to save data", e);
      } finally {
         router.refresh();
      }
   };

   return (
      <div className=" flex items-end justify-between w-full">
         <div className="flex flex-col items-start gap-1">
            <h2>New Registration</h2>
            <p className="text-muted-foreground text-sm">
               Select courses to register for this semester.
            </p>
         </div>
         <Button
            onClick={() => handleClick()}
            variant="default"
            size="sm"
            className="ml-auto h-8"
         >
            <Save className="mr-1 h-4 w-5" />
            Save
         </Button>
      </div>
   );
}
