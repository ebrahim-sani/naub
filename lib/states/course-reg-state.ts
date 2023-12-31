import { create } from "zustand";

interface Course {
   id: string;
   courseCode: string;
   courseTitle: string;
   department: string;
   departmentId: string | null;
   level: string;
   unit: string;
   courseStatus: string;
   preReq: string | null;
}

interface CourseStore {
   courses: Course[];
   addCourse: (course: Course) => void;
   removeCourse: (courseCode: string) => void;
   reset: () => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
   courses: [],
   addCourse: (course) =>
      set((state) => ({ courses: [...state.courses, course] })),
   removeCourse: (courseCode) =>
      set((state) => ({
         courses: state.courses.filter(
            (course) => course.courseCode !== courseCode,
         ),
      })),
   reset: () => set({ courses: [] }),
}));
