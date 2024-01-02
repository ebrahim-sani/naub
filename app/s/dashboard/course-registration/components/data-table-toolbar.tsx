"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-vew-option";
import { SemesterOption } from "./semester-option";

interface DataTableToolbarProps<TData> {
   table: Table<TData>;
}

export function DataTableToolbar<TData>({
   table,
}: DataTableToolbarProps<TData>) {
   const isFiltered = table.getState().columnFilters.length > 0;

   return (
      <div className="flex items-center gap-2">
         <div className="flex items-center space-x-2">
            <Input
               placeholder="Filter by course code"
               value={
                  (table.getColumn("courseCode")?.getFilterValue() as string) ??
                  ""
               }
               onChange={(event) =>
                  table
                     .getColumn("courseCode")
                     ?.setFilterValue(event.target.value)
               }
               className="h-8 w-[150px] lg:w-[250px]"
            />

            {isFiltered && (
               <Button
                  variant="ghost"
                  onClick={() => table.resetColumnFilters()}
                  className="h-8 px-2 lg:px-3"
               >
                  Reset
                  <Cross2Icon className="ml-2 h-4 w-4" />
               </Button>
            )}
         </div>
         <DataTableViewOptions table={table} />
         <SemesterOption />
      </div>
   );
}