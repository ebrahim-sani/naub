import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "./ui/card";

interface CardProps {
   className?: string;
   title?: string;
   description?: string;
   children?: React.ReactNode;
}

export function CardTemplate({
   className,
   children,
   title,
   description,
}: CardProps) {
   return (
      <Card className={className}>
         <CardHeader>
            <CardTitle className="text-base">{title}</CardTitle>
            {/* <CardDescription>{description}</CardDescription> */}
         </CardHeader>
         <CardContent>{children}</CardContent>
      </Card>
   );
}
