import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
   const session = await getServerSession(authOptions);
   console.log(session);
   return (
      <main>
         <h1>Hi</h1>
      </main>
   );
}
