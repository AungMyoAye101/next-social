import Hero from "@/components/Hero";
import PostContainer from "@/components/PostContainer";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex gap-4 py-10 px-4">
      <aside className="hidden md:block w-[30%] bg-green-400">
        <div>LEft side</div>
      </aside>
      <main className="w-full md:w-[40%] bg-green-400 ">
        <PostContainer />
      </main>
      <aside className="hidden md:block w-[30%] bg-green-400">
        <div>Right side</div>
      </aside>
    </section>
  );
}
