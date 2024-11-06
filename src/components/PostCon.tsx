"use client";

import React, { useEffect, useState } from "react";
import Post from "@/components/Post";

const PostCon = () => {
  const [postData, setPostData] = useState([]);

  const fetchPost = async () => {
    const res = await fetch(`/api/post`);
    const data = await res.json();
    setPostData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  console.log(postData);

  return (
    <section className="flex flex-col gap-6  ">
      {postData.map((p: any) => (
        <Post key={p._id} post={p.post} />
      ))}
    </section>
  );
};

export default PostCon;
