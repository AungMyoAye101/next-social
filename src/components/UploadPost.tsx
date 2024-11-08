"use client";

import { getUser } from "@/actions/action";
import { connectToDb } from "@/lib/connectToDb";

import { Button, Input } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import Image from "next/image";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";

const UploadPost = () => {
  const { data: session } = useSession();
  const user = getUser();
  const createPost = async (formData: FormData) => {
    const title = formData.get("title");
    console.log(user);
    try {
      if (session?.user) {
        const res = await fetch("/api/post/new", {
          method: "POST",
          body: JSON.stringify({
            userId: session.user.name,
            title,
          }),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="p-4 rounded-md shadow-md border">
      <main className="flex gap-2">
        <Image
          src={"/profile.jpg"}
          width={20}
          height={20}
          alt="users photo"
          className="size-10 bg-purple-400 rounded-full"
        />
        <form action={createPost} className="flex flex-col gap-2  flex-1 ">
          <Input
            type="text"
            placeholder="Whats on your mind."
            radius="lg"
            name="title"
          />
          <div className="flex gap-2 self-end">
            <Button
              isIconOnly
              color="primary"
              variant="faded"
              aria-label="Upload a photo"
              radius="full"
            >
              <FaImage />
            </Button>
            <Button color="primary" type="submit">
              Upload
            </Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default UploadPost;
