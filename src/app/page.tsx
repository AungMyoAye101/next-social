import { auth } from "@/auth";
import Ads from "@/components/Ads";
import Post from "@/components/Post";
import PostCon from "@/components/PostCon";
import SideMenu from "@/components/SideMenu";
import SignOut from "@/components/SignOut";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative max-w-7xl mx-auto flex gap-4 justify-center py-4 ">
      <div className="w-[25%]">
        <SideMenu />
      </div>

      <main className="w-full md:w-[45%] flex flex-col h-screen gap-4  px-6 overflow-hidden overflow-y-scroll">
        <PostCon />
      </main>
      <div className="w-[25%] flex flex-col">
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

/*     <section className="relative max-w-7xl mx-auto flex gap-4 justify-center py-4 ">
      <div className="w-[25%]  md:flex flex-col gap-6 fixed left-8  top-20 hidden ">
        <SideMenu />
      </div>
      <main className=" w-full md:w-[45%] flex flex-col  gap-4   px-4 ">
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
      <div className="w-[25%] md:flex flex-col gap-6 fixed top-20 hidden  right-8">
        <Ads />
        <Ads />
      </div>
    </section> */
