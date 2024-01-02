import { Checkbox } from "@/components/ui/checkbox";
import { useCourseStore } from "@/lib/states/course-reg-state";
import { CourseProps } from "@/lib/types";

const CheckboxCell = ({ row, cell }: { row: any; cell: any }) => {
   const { addCourse, courses, removeCourse } = useCourseStore();

   const handleCheckboxChange = (value: boolean) => {
      row.toggleSelected(!!value);

      const selectedCourse: CourseProps = cell.row.original;

      if (
         !courses.some(
            (course: CourseProps) => course?.id === selectedCourse?.id,
         )
      ) {
         // @ts-ignore
         addCourse(selectedCourse);
      }

      if (
         courses.some(
            (course: CourseProps) => course?.id === selectedCourse?.id,
         )
      ) {
         // @ts-ignore
         removeCourse(selectedCourse?.courseCode);
      }
   };

   return (
      <Checkbox
         checked={row.getIsSelected()}
         onCheckedChange={handleCheckboxChange}
         aria-label="Select row"
         className="translate-y-[2px]"
      />
   );
};

export default CheckboxCell;
