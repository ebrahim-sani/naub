import DashInfo from "@/components/DashInfo";

export default function Dashboard() {
   return (
      <main className="flex flex-col h-screen w-full">
         <div className="flex flex-1 w-full px-4 py-2">
            <DashInfo />
         </div>
      </main>
   );
}
