import { Button } from "@/components/ui/button";
import {
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";

import { DataTable } from "@/app/dashboard/course-registration/components/data-table";
import { CourseProps } from "@/lib/types";
import { columns } from "@/app/dashboard/course-registration/components/columns";

// Simulate a database read for tasks.
async function getCourses() {
   const res = await fetch("/api/get-courses", {
      headers: { "Content-Type": "application/json" },
      method: "GET",
   });
   if (!res.ok) {
      console.log("Failed to fetch courses");
   }
   return res.json();
}

export async function CourseRegDialog() {
   const courses: CourseProps[] = await getCourses();
   // console.log(courses[0]);

   return (
      <>
         <DialogContent className="flex flex-1 flex-col items-start w-full sm:max-w-7xl h-full sm:max-h-[90%]">
            <DialogHeader>
               <DialogTitle>Courses</DialogTitle>
               <DialogDescription>
                  Select course to register for this semester.
               </DialogDescription>
            </DialogHeader>
            <div className="flex flex-1 items-start space-x-2 w-full">
               <div className="flex h-full flex-1 flex-col space-y-8">
                  <DataTable data={courses} columns={columns} />
               </div>
            </div>
            <DialogFooter className="sm:justify-start">
               <DialogClose asChild>
                  <Button type="button" variant="secondary">
                     Close
                  </Button>
               </DialogClose>
            </DialogFooter>
         </DialogContent>
      </>
   );
}
