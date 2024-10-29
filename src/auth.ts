import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDb } from "./lib/connectToDb";
import User from "@/lib/model/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        name: { label: "Name", type: "text", placeholder: "Enter Your Name" },
        email: { label: "Email", type: "email", placeholder: "jhon@gmail.com" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials: any) => {
        connectToDb();
        let user = credentials;

        console.log(user);

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
});
