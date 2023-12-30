import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { CourseProps, StudentProps } from "@/lib/types";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

const prisma = new PrismaClient();

export async function getStudent(
   userId: string | undefined,
): Promise<StudentProps> {
   try {
      const student = await prisma.student.findUnique({
         where: { id: userId },
         include: { coursesRegistered: { include: { courses: true } } },
      });
      return student;
   } catch (e) {
      console.log("Error fetching student", e);
      throw new Error("Failed to fetch student info.");
   } finally {
      await prisma.$disconnect();
   }
}

export async function getCourses(): Promise<CourseProps[]> {
   try {
      const courses = await prisma.course.findMany();
      return courses;
   } catch (e) {
      console.log("Error fetching courses", e);
      throw new Error("Failed to fetch student info.");
   } finally {
      await prisma.$disconnect();
   }
}
