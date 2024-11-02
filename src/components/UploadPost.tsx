"use client";

import { Button, Input } from "@nextui-org/react";
import React from "react";
import { FaImage } from "react-icons/fa6";

const UploadPost = () => {
  return (
    <section className="p-4 rounded-md shadow-md border">
      <main className="flex gap-2">
        <div className="size-10 bg-purple-400 rounded-full"></div>
        <form action="#" className="flex flex-col gap-2  flex-1 ">
          <Input type="text" placeholder="Whats on your mind." radius="lg" />
          <div className="flex gap-2 self-end">
            <Button
              isIconOnly
              color="primary"
              variant="faded"
              aria-label="Upload a photo"
            >
              <FaImage />
            </Button>
            <Button color="primary">Upload</Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default UploadPost;
