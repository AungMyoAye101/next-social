import React from "react";

const Post = () => {
  return (
    <div className="min-w-[300px] w-full max-w-[500px] flex flex-col gap-4 pt-4 bg-white rounded-lg shadow-md dark:shadow-none">
      <div className="px-4 flex items-center gap-2">
        <div className="size-10 rounded-full bg-purple-500"></div>
        <div>
          <h2 className="font-semibold">your name</h2>
          <p className="opacity-80 text-sm">4 min ago</p>
        </div>
      </div>
      <div className="px-4">
        <h1 className="text-lg font-semibold">This is the post title</h1>
      </div>
      <div className="bg-neutral-300 h-52"></div>
      <div className="px-4 flex overflow-hidden rounded-lg border-t border-t-gray-200 mb-2">
        <button className="hover:bg-gray-200 flex-1 px-4 py-2 ">Like</button>
        <button className="hover:bg-gray-200 flex-1 px-4 py-2 ">Comment</button>
        <button className="hover:bg-gray-200 flex-1 px-4 py-2 ">Share</button>
      </div>
    </div>
  );
};

export default Post;
