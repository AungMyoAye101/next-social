import { auth } from "@/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  console.log(session?.user);
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="text-red-400 text-4xl ">{session?.user?.name}</div>
      <div className="text-red-400 text-4xl ">{session?.user?.email}</div>
      <div className="flex gap-4">
        <Link href={"/signup"} className="px-4 py-2 bg-blue-400 rounded-lg">
          SignUp
        </Link>
        <Link href={"/Login"} className="px-4 py-2 bg-purple-400 rounded-lg">
          Login
        </Link>
      </div>
    </section>
  );
}
