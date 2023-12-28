import { cn } from "@/lib/utils";
import { InfoCard } from "./InfoCard";
import { CGPCard } from "./CGP";
import { CardTemplate } from "./Card";
import { CurrentRegCourses } from "./CurrCourseTable";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PersonalInfo } from "./PersonalInfo";

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

async function getData() {
   const res = await fetch("/api/get-student");

   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
   }
   return res.json();
}

export default async function DashInfo() {
   const student = await getData();

   return (
      <>
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
      </>
   );
}
