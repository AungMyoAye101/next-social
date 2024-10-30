import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { connectToDb } from "./lib/connectToDb";

import bcrypt from "bcryptjs";
import { User } from "./lib/model/User";

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
        if (!credentials) return;

        try {
          await connectToDb();
          const newuser = await User.findOne({ email: credentials.email });
          console.log(newuser);
          if (newuser) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              newuser.password
            );

            if (isMatch) {
              return newuser;
            } else {
              throw new Error("User not found.");
            }
          }
        } catch (err) {
          console.log("hey error");
          throw new Error("Unable to login ");
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
