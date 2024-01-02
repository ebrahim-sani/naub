import CourseRegTable from "@/components/CourseRegTable";
import { authOptions } from "@/lib/auth";
import { getStudent } from "@/utils/dataFetch";
import { getServerSession } from "next-auth";

async function page() {
   const session = await getServerSession(authOptions);
   const student = await getStudent(session?.user.id);
   const course_reg: any = student?.coursesRegistered;
   return (
      <main className="flex flex-col w-full h-full items-start px-2 lg:px-3 mb-2">
         <CourseRegTable course_reg={course_reg} />
      </main>
   );
}

export default page;
