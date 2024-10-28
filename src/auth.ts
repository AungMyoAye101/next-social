import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDb } from "./lib/connectToDb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: any) => {
        connectToDb();
        let user = credentials;
        console.log(user);

        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      },
    }),
  ],
});
