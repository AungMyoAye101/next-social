import React from "react";

const page = ({ params }: any) => {
  return (
    <section className="page_padding flex-1">
      <div className="flex  gap-4  justify-between bg-white rounded-lg px-4 py-6 shadow-md dark:shadow-none ">
        <div className="flex items-center gap-4">
          <div className="size-20 bg-purple-500 rounded-full"></div>
          <div>
            <h2 className="font-semibold">your name</h2>
            <p className="opacity-80 text-sm">email@gmail.com</p>
          </div>
        </div>
        <div className="">
          <button className="bg-purple-400 py-1.5 px-4 rounded-lg  ">
            Edit
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
