import React from "react";

const UploadPost = () => {
  return (
    <section>
      <main className="flex gap-2">
        <div className="size-10 bg-purple-400 rounded-full"></div>
        <form action="#" className="flex flex-col gap-2 bg-green-100  flex-1 ">
          <input
            type="text"
            placeholder="Whats on your mind."
            className="px-2 py-2 rounded-full border  "
          />
          <button className="bg-blue-400 px-4 py-1 rounded-full self-end">
            Post
          </button>
        </form>
      </main>
    </section>
  );
};

export default UploadPost;
