import { DataTable } from "@/app/dashboard/course-registration/components/data-table";
import { CourseProps } from "@/lib/types";
import { columns } from "@/app/dashboard/course-registration/components/columns";
import { getCourses } from "@/utils/dataFetch";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export default async function page() {
   const courses: CourseProps[] = await getCourses();

   return (
      <main className="flex w-full h-full overflow-auto mb-2">
         <div className="flex flex-1 flex-col items-start px-4 w-full sm:max-w-7xl h-full sm:max-h-[90%] gap-3 mb-2">
            <div className=" flex items-end justify-between w-full">
               <div className="flex flex-col items-start gap-1">
                  <h2>New Registration</h2>
                  <p className="text-muted-foreground text-sm">
                     Select courses to register for this semester.
                  </p>
               </div>
               <Button variant="outline" size="lg" className="ml-auto h-8">
                  <Save className="mr-1 h-4 w-5" />
                  Save
               </Button>
            </div>
            <div className="flex flex-1 items-start space-x-2 w-full">
               <div className="flex h-full flex-1 flex-col space-y-8">
                  <DataTable data={courses} columns={columns} />
               </div>
            </div>
         </div>
      </main>
   );
}
