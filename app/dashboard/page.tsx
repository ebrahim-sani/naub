import { getStudent } from "@/utils/dataFetch";
import { StudentProps } from "@/lib/types";
import { InfoCard } from "@/components/InfoCard";
import { CGPCard } from "@/components/CGP";
import { CardTemplate } from "@/components/Card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PersonalInfo } from "@/components/PersonalInfo";
import { CurrentRegCourses } from "@/components/CurrCourseTable";
import { cn } from "@/lib/utils";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

function GridContainer({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   return (
      <div
         className={cn(
            "flex items-center justify-center [&>div]:w-full",
            className,
         )}
         {...props}
      />
   );
}

export default async function Dashboard() {
   const session = await getServerSession(authOptions);
   const student: StudentProps = await getStudent(session?.user.id);

   return (
      <main className="flex flex-col h-screen w-full">
         <div className="flex flex-1 w-full px-4 py-2">
            <div className="flex flex-col items-start w-full gap-3 h-full">
               <div className="items-start justify-center gap-3 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-11 w-full">
                  <GridContainer className="col-span-5">
                     <InfoCard student={student} />
                  </GridContainer>
                  <GridContainer className="col-span-2">
                     <CGPCard />
                  </GridContainer>
                  <GridContainer className="col-span-4">
                     <CardTemplate title="Team Members">
                        <div className="flex items-center justify-between space-x-4">
                           <div className="flex items-center space-x-4">
                              <Avatar>
                                 <AvatarImage src="https://github.com/shadcn.png" />
                                 <AvatarFallback>OM</AvatarFallback>
                              </Avatar>
                              <div>
                                 <p className="text-sm font-medium leading-none">
                                    Sofia Davis
                                 </p>
                                 <p className="text-sm text-muted-foreground">
                                    m@example.com
                                 </p>
                              </div>
                           </div>
                        </div>
                     </CardTemplate>
                  </GridContainer>
               </div>
               <div className="flex flex-col lg:flex-row items-start justify-between gap-3 w-full h-full">
                  <GridContainer className="flex flex-col flex-1 w-full h-full">
                     <CardTemplate
                        title="Personal Information"
                        className="flex flex-col h-full"
                     >
                        <PersonalInfo student={student} />
                     </CardTemplate>
                  </GridContainer>
                  <GridContainer className="flex flex-col flex-1 w-full h-full">
                     <CardTemplate
                        title="Current Session"
                        className="flex flex-col h-full w-full"
                     >
                        <CurrentRegCourses />
                     </CardTemplate>
                  </GridContainer>
               </div>
            </div>
         </div>
      </main>
   );
}
