import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
   session: {
      strategy: "jwt",
   },
   providers: [
      CredentialsProvider({
         name: "Sign in",
         credentials: {
            email_address: {
               label: "Email",
               type: "text",
            },
            password: {
               label: "Password",
               type: "password",
            },
         },
         async authorize(credentials) {
            if (!credentials?.email_address || !credentials?.password) {
               return null;
            }
            const user = {
               id: "1",
               name: "John Doe",
               email: credentials?.email_address,
            };
            return user;
         },
      }),
   ],

   callbacks: {
      session: async ({ session, token }) => {
         // if (token && typeof token.id === "string") {
         // }
         return session;
      },

      jwt: ({ token, user }) => {
         if (user) {
            const time = new Date();
            const expires = time.setHours(time.getHours() + 1);

            return {
               ...token,
               id: user.id,
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
