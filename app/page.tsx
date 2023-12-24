import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
