import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { FilePlus2, ScrollText } from "lucide-react";
import Link from "next/link";
import { RegCourseProps } from "@/lib/types";

export default function CourseRegTable({ course_reg }: { course_reg: any[] }) {
   const totalUnit = (reg: RegCourseProps) => {
      const units = reg?.courses.reduce(
         (unit, course) => unit + parseInt(course.unit),
         0,
      );
      return units;
   };

   return (
      <>
         <div className="flex flex-1 flex-col h-full mb-2 px-3 py-2 border rounded-lg w-full gap-2">
            <div className="flex justify-between items-center">
               <Input
                  placeholder="Find course reg..."
                  className="h-8 w-[150px] lg:w-[250px]"
               />
               <Link href="/dashboard/course-registration/new">
                  <Button variant="default" className="h-8 px-2 lg:px-3">
                     New Registration
                     <FilePlus2 className="ml-2 h-4 w-4" />
                  </Button>
               </Link>
            </div>
            <ScrollArea className="h-[84%]">
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>No.</TableHead>
                        <TableHead>Semester</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Units</TableHead>
                        <TableHead>Session</TableHead>
                        <TableHead className="text-right"></TableHead>
                     </TableRow>
                  </TableHeader>

                  <TableBody>
                     {course_reg?.length ? (
                        <>
                           {course_reg
                              ?.slice()
                              .sort(
                                 (a, b) =>
                                    new Date(b?.registeredTime).getTime() -
                                    new Date(a?.registeredTime).getTime(),
                              )
                              .map((reg: any, i: number) => (
                                 <TableRow key={i}>
                                    <TableCell className="font-medium">
                                       {i + 1}
                                    </TableCell>
                                    <TableCell>{reg?.semester}</TableCell>
                                    <TableCell>{reg?.level}</TableCell>
                                    <TableCell>{totalUnit(reg)}</TableCell>
                                    <TableCell>{reg?.session}</TableCell>
                                    <TableCell className="text-right">
                                       <Button
                                          // onClick=""
                                          variant="outline"
                                          size="sm"
                                          className="ml-auto h-8"
                                       >
                                          <ScrollText className="mr-1 h-4 w-5" />
                                          Downoload
                                       </Button>
                                    </TableCell>
                                 </TableRow>
                              ))}
                        </>
                     ) : (
                        <TableRow>
                           <TableCell className="h-full text-center">
                              No registration yet!
                           </TableCell>
                        </TableRow>
                     )}
                  </TableBody>
               </Table>
            </ScrollArea>
         </div>
      </>
   );
}
