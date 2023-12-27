import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableFooter,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "./ui/scroll-area";

const courses = [
   {
      code: "SWE314",
      courseName: "Web Application Development",
      unit: "3",
   },
   {
      code: "SWE312",
      courseName: "Software Testing & Quality Assurance",
      unit: "2",
   },
   {
      code: "SWE311",
      courseName: "Object Oriented Analysis and Design",
      unit: "3",
   },
   {
      code: "SWE316",
      courseName: "Concept of Programming Language",
      unit: "3",
   },
   {
      code: "CSC311",
      courseName: "Data Structure and Algorithm",
      unit: "3",
   },
   {
      code: "IFS312",
      courseName: "Database Management System",
      unit: "2",
   },
   {
      code: "SWE317",
      courseName: "Overview of Software Engineering",
      unit: "3",
   },
   {
      code: "GST311",
      courseName: "Practical Entreprenueship",
      unit: "2",
   },
];

export function CurrentRegCourses() {
   const totalUnit = courses.reduce(
      (units, course) => units + parseInt(course.unit),
      0,
   );
   return (
      <Table className="flex flex-col w-full">
         <ScrollArea className="flex xl:h-56 min-[1400px]:h-72 2xl:h-96 w-full">
            <TableHeader>
               <TableRow>
                  <TableHead>No.</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="text-right">Unit</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody className="w-full">
               {courses.map((course, i) => (
                  <TableRow key={i}>
                     <TableCell className="font-medium">{i + 1}</TableCell>
                     <TableCell>{course.code}</TableCell>
                     <TableCell>{course.courseName}</TableCell>
                     <TableCell className="text-right">{course.unit}</TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </ScrollArea>

         <TableFooter className="w-full">
            <TableRow className="flex w-full justify-between">
               <TableCell>Total Unit</TableCell>
               <TableCell className="text-right">{totalUnit}</TableCell>
            </TableRow>
         </TableFooter>
         <TableCaption>Current registered courses.</TableCaption>
      </Table>
   );
}
