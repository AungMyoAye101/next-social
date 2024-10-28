import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDb } from "./lib/connectToDb";
import User from "@/lib/model/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        name: {},
        email: {},
        password: {},
      },
      authorize: async (credentials: any) => {
        connectToDb();
        let user = credentials;
        // user = await User.findOne({ email: credentials.email });

        console.log(user);

        return user;
      },
    }),
  ],
});
