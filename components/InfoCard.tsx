import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { StudentProps } from "@/lib/types";

export function InfoCard({ student }: { student: StudentProps }) {
   return (
      <Card>
         <CardContent className="grid gap-6 pt-6">
            <div className="flex items-center justify-between space-x-4">
               <div className="flex flex-col lg:flex-row items-center space-x-4">
                  <Avatar className="h-[120px] w-[120px]">
                     <AvatarImage src="https://github.com/shadcn.png" />
                     <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start gap-2">
                     <CardItem
                        title="Full Name:"
                        info={
                           student?.firstName +
                           " " +
                           student?.lastName +
                           " " +
                           student?.otherName
                        }
                     />
                     <CardItem
                        title="Matric Number:"
                        info={student?.matricNumber}
                     />
                     <CardItem title="Department:" info={student?.department} />
                     <CardItem title="Level:" info={student?.level} />
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   );
}

function CardItem({
   title,
   info,
}: {
   title: string | undefined;
   info: string | undefined;
}) {
   return (
      <div className="flex items-center gap-1">
         <p className="text-sm font-medium leading-none">{title}</p>
         <p className="text-sm text-muted-foreground">{info}</p>
      </div>
   );
}
