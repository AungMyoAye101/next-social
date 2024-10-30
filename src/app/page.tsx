import { auth } from "@/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  console.log(session?.user);
  return (
    <section className="min-h-screen flex flex-col  gap-10 justify-center items-center">
      {!session?.user && <div>Please Create an account.</div>}
      {session?.user && (
        <div>
          <p>
            {session.user.name} and {session.user.email}
          </p>

          <button>SignOut</button>
        </div>
      )}
      <div className="flex gap-4">
        <Link href={"/signup"} className="px-4 py-2 bg-blue-400 rounded-lg">
          SignUp
        </Link>
        <Link href={"/login"} className="px-4 py-2 bg-purple-400 rounded-lg">
          Login
        </Link>
      </div>
    </section>
  );
}
