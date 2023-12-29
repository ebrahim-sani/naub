import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
   if (req.method !== "GET") {
      return new Response("", { status: 405 });
   }
   try {
      const courses = await prisma.course.findMany();
      return new Response(JSON.stringify(courses), { status: 200 });
   } catch (e) {
      console.log("Error fetching student", e);
      return new Response("", { status: 500 });
   } finally {
      await prisma.$disconnect();
   }
}
