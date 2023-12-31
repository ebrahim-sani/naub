import { create } from "zustand";

interface Semester {
   semester: string;
   setSemester: (semester: string) => void;
}

export const useSemesterStore = create<Semester>((set) => ({
   semester: "",
   setSemester: (semester) => set({ semester }),
}));
