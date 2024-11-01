import { auth } from "@/auth";
import Ads from "@/components/Ads";
import Post from "@/components/Post";
import SideMenu from "@/components/SideMenu";
import SignOut from "@/components/SignOut";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex w-full gap-6 py-8">
      <div className="w-[30%]  flex flex-col gap-6">
        <SideMenu />
      </div>

      <main className=" w-full md:w-[40%] flex flex-col gap-4">
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
      <div className="w-[25%] flex flex-col gap-6">
        <Ads />
        <Ads />
      </div>
    </section>
  );
}
{
  /* <section className="min-h-screen flex flex-col  gap-10 justify-center items-center">
{!session?.user && <div>Please Create an account.</div>}
{session?.user && (
  <div>
    <p>
      {session.user.name} and {session.user.email}
    </p>

    <SignOut />
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
</section> */
}
