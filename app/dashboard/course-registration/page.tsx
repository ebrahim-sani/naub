import CourseRegTable from "@/components/CourseRegTable";

// @ts-ignore
const course_reg = [
   {
      id: "1",
      semester: "First Semester",
      Session: "2020/2021",
      level: "100",
      totalUnit: "22",
   },
   {
      id: "2",
      semester: "Second Semester",
      Session: "2020/2021",
      level: "100",
      totalUnit: "22",
   },
   {
      id: "3",
      semester: "First Semester",
      Session: "2021/2022",
      level: "200",
      totalUnit: "22",
   },
   {
      id: "4",
      semester: "Second Semester",
      Session: "2021/2022",
      level: "200",
      totalUnit: "22",
   },
   {
      id: "5",
      semester: "First Semester",
      Session: "2022/2023",
      level: "300",
      totalUnit: "22",
   },
   {
      id: "6",
      semester: "First Semester",
      Session: "2022/2023",
      level: "300",
      totalUnit: "22",
   },
   {
      id: "7",
      semester: "Second Semester",
      Session: "2022/2023",
      level: "300",
      totalUnit: "22",
   },
   {
      id: "8",
      semester: "First Semester",
      Session: "2023/2024",
      level: "400",
      totalUnit: "22",
   },
   {
      id: "9",
      semester: "Second Semester",
      Session: "2023/2024",
      level: "400",
      totalUnit: "22",
   },
   {
      id: "10",
      semester: "First Semester",
      Session: "2024/2025",
      level: "500",
      totalUnit: "22",
   },
   {
      id: "11",
      semester: "Second Semester",
      Session: "2024/2025",
      level: "500",
      totalUnit: "22",
   },
];

export default function page() {
   return (
      <main className="flex flex-col w-full h-full items-start px-2 lg:px-3 mb-2">
         <CourseRegTable course_reg={course_reg} />
      </main>
   );
}
