import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { StudentProps } from "@/lib/types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStudent() {
   const session = await getServerSession(authOptions);
   const student: StudentProps = await prisma.student.findUnique({
      where: { id: session?.user.id },
      include: { coursesRegistered: { include: { courses: true } } },
   });
   if (!student) {
      console.log("Failed to fetch student");
   }
   return student;
}
