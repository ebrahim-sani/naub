import { StudentProps } from "@/lib/types";

export function PersonalInfo({ student }: { student: StudentProps }) {
   return (
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
            <InfoCard info={student?.email} title="Email" />
            <InfoCard info={student?.phoneNumber} title="Phone Number" />
            <InfoCard info={student?.modeOfEntry} title="Mode of Entry" />
            <InfoCard info={student?.lga} title="LGA" />
            <InfoCard info={student?.state} title="State" />
            <InfoCard info={student?.country} title="Country" />
            <InfoCard info={student?.address} title="Address" />
            <InfoCard info={student?.maritalStatus} title="Relationshop" />
            <InfoCard info={student?.bloodGroup} title="Blood Group" />
            <InfoCard info={student?.genotype} title="Genotype" />
            <InfoCard info={student?.hairColor} title="Hair Color" />
            <InfoCard info={student?.religion} title="Religion" />
         </div>
      </>
   );
}

function InfoCard({
   title,
   info,
}: {
   title: string;
   info: string | null | undefined;
}) {
   return (
      <div className="flex flex-col items-start gap-2">
         <p className="text-sm font-medium leading-none">{title}</p>
         <p className="text-sm text-muted-foreground">{info}</p>
      </div>
   );
}
