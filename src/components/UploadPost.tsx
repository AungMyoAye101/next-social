"use client";

import { submitPost } from "@/actions/action";

import { Button, Input } from "@nextui-org/react";

import Image from "next/image";
import React from "react";
import { FaImage } from "react-icons/fa6";

const UploadPost = () => {
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
        <form action={submitPost} className="flex flex-col gap-2  flex-1 ">
          <Input
            type="text"
            placeholder="Whats on your mind."
            radius="lg"
            name="post"
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
