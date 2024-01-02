import { CourseProps } from "@/lib/types";
import { getCourses } from "@/utils/dataFetch";
import NewCourseRegHeader from "@/components/NewCourseRegHeader";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";

export default async function page() {
   const courses: CourseProps[] = await getCourses();

   return (
      <main className="flex w-full h-full overflow-auto mb-2">
         <div className="flex flex-1 flex-col items-start px-4 w-full sm:max-w-7xl h-full sm:max-h-[90%] gap-3 mb-2">
            <NewCourseRegHeader />
            <div className="flex flex-1 items-start space-x-2 w-full">
               <div className="flex h-full flex-1 flex-col space-y-8">
                  <DataTable data={courses} columns={columns} />
               </div>
            </div>
         </div>
      </main>
   );
}
