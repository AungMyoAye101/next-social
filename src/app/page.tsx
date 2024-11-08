import { auth } from "@/auth";
import Ads from "@/components/Ads";
import Post from "@/components/Post";
import PostCon from "@/components/PostCon";
import SideMenu from "@/components/SideMenu";
import SignOut from "@/components/SignOut";
import UploadPost from "@/components/UploadPost";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <section>
      <PostCon />
    </section>
  );
}
