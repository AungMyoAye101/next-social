import UploadPost from "@/components/UploadPost";
import React from "react";

const Profile = () => {
  return (
    <section className="flex flex-col gap-4 space-y-2 ">
      <div className="flex justify-center items-center bg-green-100 h-[30vh]">
        <div className="size-40 rounded-full bg-purple-500"></div>
      </div>
      <div className="text-center ">
        <h1 className="text-2xl font-bold font-serif ">Name</h1>
        <h2 className="text-lg font-semibold font-serif text-gray-500">
          Email@gmail.com
        </h2>
        <div className="flex items-center justify-center gap-1 text-base text-gray-400">
          <span>69 Followers</span> .<span>69 Following</span>
        </div>
      </div>

      <div>
        <UploadPost />
      </div>
    </section>
  );
};

export default Profile;
