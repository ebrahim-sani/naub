import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function POST(req: Request) {
   if (req.method !== "POST") {
      return new Response("", { status: 405 });
   }

   const getSession = await getServerSession(authOptions);
   const studentId = getSession?.user.id;
   const student = await prisma.student.findUnique({
      where: { id: studentId },
   });
   const level = student?.level;
   const { session, semester, courses } = await req.json();

   if (semester === "") {
      return new Response(JSON.stringify("Bad Request: No semester"), {
         status: 400,
      });
   }

   if (studentId && level) {
      try {
         await prisma.registerCourse.create({
            data: {
               level,
               semester,
               session,
               studentId,
               courses: {
                  create: courses,
               },
            },
         });
         return new Response(JSON.stringify(courses), { status: 200 });
      } catch (e) {
         console.log("Error saving course data", e);
         return new Response("", { status: 500 });
      } finally {
         await prisma.$disconnect();
      }
   }
}
