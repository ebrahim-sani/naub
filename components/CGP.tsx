import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function CGPCard() {
   return (
      <Card>
         <CardHeader>
            <CardTitle className="text-xl font-medium">CGPA</CardTitle>
         </CardHeader>
         <CardContent className="flex items-center justify-center">
            <h3 className="text-3xl font-medium leading-none py-5">2.0</h3>
         </CardContent>
      </Card>
   );
}
