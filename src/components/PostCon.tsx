import React from "react";
import Post from "@/components/Post";

const PostCon = async () => {
  const res = await fetch(`${process.env.URL}/api/post`);
  const postData = await res.json();
  return (
    <section className="flex flex-col gap-6  ">
      {postData.map((p: any) => (
        <Post key={p._id} />
      ))}
    </section>
  );
};

export default PostCon;
