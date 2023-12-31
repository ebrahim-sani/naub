"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { CourseProps } from "@/lib/types";
import { useCourseStore } from "@/lib/states/course-reg-state";

export const columns: ColumnDef<CourseProps>[] = [
   {
      id: "id",
      cell: ({ row, cell }) => {
         const { addCourse, courses, removeCourse } = useCourseStore();

         return (
            <Checkbox
               checked={row.getIsSelected()}
               onCheckedChange={(value) => {
                  row.toggleSelected(!!value);
                  // Na where you'll be working tomorrow!!
                  const selectedCourse = cell.row.original;

                  if (
                     !courses.some((course) => course.id === selectedCourse?.id)
                  ) {
                     // @ts-ignore
                     addCourse(selectedCourse);
                  }

                  if (
                     courses.some((course) => course.id === selectedCourse?.id)
                  ) {
                     // @ts-ignore
                     removeCourse(selectedCourse?.courseCode);
                  }
               }}
               aria-label="Select row"
               className="translate-y-[2px]"
            />
         );
      },
      enableSorting: false,
      enableHiding: false,
   },

   {
      accessorKey: "courseCode",
      header: ({ column }) => (
         <DataTableColumnHeader column={column} title="Course Code" />
      ),
      cell: ({ row }) => {
         return (
            <div>
               <span className="max-w-[500px] truncate font-medium">
                  {row.getValue("courseCode")}
               </span>
            </div>
         );
      },
   },
   {
      accessorKey: "courseTitle",
      header: ({ column }) => (
         <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => {
         return (
            <div className="flex space-x-2">
               <span className="max-w-[500px] truncate font-medium">
                  {row.getValue("courseTitle")}
               </span>
            </div>
         );
      },
   },
   {
      accessorKey: "department",
      header: ({ column }) => (
         <DataTableColumnHeader column={column} title="Department" />
      ),
      cell: ({ row }) => {
         return (
            <div className="flex space-x-2">
               <span className="max-w-[500px] truncate font-medium">
                  {row.getValue("department")}
               </span>
            </div>
         );
      },
   },
   {
      accessorKey: "level",
      header: ({ column }) => (
         <DataTableColumnHeader column={column} title="Level" />
      ),
      cell: ({ row }) => {
         return (
            <div className="flex space-x-2">
               <span className="max-w-[500px] truncate font-medium">
                  {row.getValue("level")}
               </span>
            </div>
         );
      },
   },
   {
      accessorKey: "unit",
      header: ({ column }) => (
         <DataTableColumnHeader column={column} title="Unit" />
      ),
      cell: ({ row }) => {
         return (
            <div className="flex space-x-2">
               <span className="max-w-[500px] truncate font-medium">
                  {row.getValue("unit")}
               </span>
            </div>
         );
      },
   },
   {
      accessorKey: "courseStatus",
      header: ({ column }) => (
         <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
         return (
            <div className="flex space-x-2">
               <span className="max-w-[500px] truncate font-medium">
                  {row.getValue("courseStatus")}
               </span>
            </div>
         );
      },
   },
];
