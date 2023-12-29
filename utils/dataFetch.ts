import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { StudentProps } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStudent() {
   let student: StudentProps;
   try {
      const session = await getServerSession(authOptions);
      student = await prisma.student.findUnique({
         where: { id: session?.user.id },
         include: { coursesRegistered: { include: { courses: true } } },
      });
   } catch (e) {
      console.log(e);
   } finally {
      await prisma.$disconnect();
   }
   return student;
}
