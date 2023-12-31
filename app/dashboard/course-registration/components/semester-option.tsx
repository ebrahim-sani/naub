"use client";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

import { useSemesterStore } from "@/lib/states/semester-state";

export function SemesterOption() {
   const { semester, setSemester } = useSemesterStore();
   // console.log(semester);

   return (
      <Select onValueChange={(value) => setSemester(value)}>
         <SelectTrigger className="w-[160px] h-8">
            <SelectValue placeholder="Select Semester" />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               <SelectItem value="First Semester">First Semester</SelectItem>
               <SelectItem value="Second Semester">Second Semester</SelectItem>
            </SelectGroup>
         </SelectContent>
      </Select>
   );
}
