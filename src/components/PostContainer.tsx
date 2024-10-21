import React from "react";
import Post from "./ui/post";

const PostContainer = () => {
  return (
    <section className="flex flex-col gap-4 mx-auto">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default PostContainer;
