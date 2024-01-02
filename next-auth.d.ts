import type { User } from "next-auth";

import "next-auth/jwt";

type UserId = string;

declare module "next-auth" {
   interface User {
      id: UserId;
      role: string;
   }
}

declare module "next-auth/jwt" {
   interface JWT {
      id: UserId;
      role: role;
   }
}

declare module "next-auth" {
   interface Session {
      user: User & {
         id: UserId;
         name: string;
         matric_number: string;
         email: string;
         role: string;
      };
   }
}
