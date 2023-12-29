"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { CourseProps } from "@/lib/types";

export const columns: ColumnDef<CourseProps>[] = [
   {
      id: "select",
      header: ({ table }) => (
         <Checkbox
            checked={
               table.getIsAllPageRowsSelected() ||
               (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value: any) =>
               table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
            className="translate-y-[2px]"
         />
      ),
      cell: ({ row }) => (
         <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
         />
      ),
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
   // {
   //    accessorKey: "status",
   //    header: ({ column }) => (
   //       <DataTableColumnHeader column={column} title="Status" />
   //    ),
   //    cell: ({ row }) => {
   //       const status = statuses.find(
   //          (status) => status.value === row.getValue("status"),
   //       );

   //       if (!status) {
   //          return null;
   //       }

   //       return (
   //          <div className="flex w-[100px] items-center">
   //             {status.icon && (
   //                <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
   //             )}
   //             <span>{status.label}</span>
   //          </div>
   //       );
   //    },
   //    filterFn: (row, id, value) => {
   //       return value.includes(row.getValue(id));
   //    },
   // },
];
