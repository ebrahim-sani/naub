import Main from "@/components/Main";
import { cookies } from "next/headers";

export default function Dashboard() {
   const layout = cookies().get("react-resizable-panels:layout");
   const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

   return <Main defaultLayout={defaultLayout} />;
}
