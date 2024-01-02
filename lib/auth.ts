import { PrismaClient } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
   session: {
      strategy: "jwt",
   },
   providers: [
      CredentialsProvider({
         name: "Sign in",
         credentials: {
            matricNumber: {
               label: "Matric Number",
               type: "text",
               placeholder: "Enter Your Matric Number",
            },
            password: {
               label: "Password",
               type: "password",
            },
         },
         async authorize(credentials) {
            // Handle Auth
            if (!credentials?.matricNumber || !credentials?.password) {
               return null;
            }
            const student = await prisma.student.findUnique({
               where: {
                  matricNumber: credentials.matricNumber,
               },
            });
            if (!student) {
               return null;
            }
            return student;
         },
      }),
   ],

   callbacks: {
      session: async ({ session, token }) => {
         if (token && typeof token.id === "string") {
            const student = await prisma.student.findUnique({
               where: {
                  id: token.id,
               },
            });
            if (student) {
               const student_data = {
                  id: token.id,
                  name:
                     student.firstName +
                     " " +
                     student.lastName +
                     " " +
                     student?.otherName,
                  matric_number: student.matricNumber,
                  email: student.email,
                  role: student.role,
               };
               session.user = student_data;
            }
         }
         return session;
      },

      jwt: ({ token, user }) => {
         if (user) {
            const time = new Date();
            const expires = time.setHours(time.getHours() + 1);

            return {
               ...token,
               id: user.id,
               role: user.role,
               exp: expires,
            };
         }
         return token;
      },
   },
   // pages: {
   //    signIn: "/auth/signin",
   // },
};
