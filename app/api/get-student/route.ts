import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

export async function GET(req: Request) {
   if (req.method !== "GET") {
      return new Response("", { status: 405 });
   }

   try {
      const session = await getServerSession(authOptions);
      const student = await prisma.student.findUnique({
         where: { id: session?.user.id },
      });
      if (!student) {
         return new Response("", { status: 404 });
      }
      return new Response(JSON.stringify(student), { status: 200 });
   } catch (e) {
      console.log("Error fetching student", e);
      return new Response("", { status: 500 });
   } finally {
      await prisma.$disconnect();
   }
}
