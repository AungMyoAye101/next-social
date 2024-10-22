import AdsContainer from "@/components/AdsContainer";
import Hero from "@/components/Hero";
import PostContainer from "@/components/PostContainer";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex gap-4 py-8 px-4">
      <aside className="hidden md:block w-[30%]">
        <AdsContainer />
      </aside>
      <main className="w-full md:w-[40%] ">
        <PostContainer />
      </main>
      <aside className="hidden md:block w-[30%] ">
        <AdsContainer />
      </aside>
    </section>
  );
}
