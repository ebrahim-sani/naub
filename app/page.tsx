import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
         <div className="flex items-center gap-3">
            <Link
               href="/api/auth/login"
               className={buttonVariants({ variant: "default" })}
            >
               Sign-in
            </Link>
            <Link href="" className={buttonVariants({ variant: "default" })}>
               Sign-up
            </Link>
         </div>
      </main>
   );
}
