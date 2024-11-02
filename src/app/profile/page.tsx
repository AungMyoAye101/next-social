"use client";

import Post from "@/components/Post";
import PostCon from "@/components/PostCon";
import UploadPost from "@/components/UploadPost";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <section className="flex flex-col gap-4 space-y-2 ">
      <div className="flex justify-center items-center ">
        <div className="relative size-40 rounded-full bg-purple-500">
          <Image
            src={"/profile.jpg"}
            fill
            alt="user photo"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-center ">
        <h1 className="text-2xl font-bold font-serif ">
          {session?.user?.name}
        </h1>
        <h2 className="text-lg font-semibold font-serif text-gray-500">
          {session?.user?.email}
        </h2>
        <div className="flex items-center justify-center gap-1 text-base text-gray-400">
          <span>69 Followers</span> .<span>69 Following</span>
        </div>
      </div>

      <div>
        <UploadPost />
      </div>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        <PostCon />
      </div>
    </section>
  );
};

export default Profile;
