import Post from "@/components/Post";
import React from "react";

const page = () => {
  return (
    <section className="flex-1  page_padding coustom-scrollbar ">
      <div className="flex flex-col gap-4  items-center">
        {Array(10)
          .fill(null)
          .map((_, i) => (
            <Post key={i} />
          ))}
      </div>
    </section>
  );
};

export default page;
