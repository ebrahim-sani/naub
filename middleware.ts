import { withAuth } from "next-auth/middleware";
import { routes } from "./lib/middleware/routes";
import { roles } from "./lib/middleware/roles";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export default withAuth(
   function middleware(req) {
      if (!req.nextauth.token) {
         redirect("/api/auth/signin");
      }
      const userRole = req.nextauth.token?.role;
      const path = req.nextUrl.pathname;
      // console.log(userRole);

      const isNotStudent =
         userRole !== roles.student &&
         path.startsWith(`${routes.studentRoute}`);

      const isNotAdmin =
         userRole !== roles.admin && path.startsWith(`${routes.adminRoute}`);

      const isNotDepartment =
         userRole !== roles.department &&
         path.startsWith(`${routes.departmentRoute}`);

      if (isNotStudent || isNotAdmin || isNotDepartment) {
         return new NextResponse("You are not authorized to access this page");
      }
   },
   {
      callbacks: {
         authorized: (params) => {
            let { token } = params;
            return !!token;
         },
      },
   },
);

export const config = {
   matcher: [
      "/s/dashboard/:path*",
      "/a/dashboard/:path*",
      "/d/dashboard/:path*",
   ],
};
