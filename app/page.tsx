import React from "react";

const page = () => {
  return (
    <section className="flex-1  pt-20 px-4 pb-4">
      <div className="h-screen flex justify-center items-center bg-green-200">
        <h1 className="text-6xl font-bold font-serif text-center">Hello </h1>
        <p className="text-2xl ">You are on home page</p>
      </div>
      <div className="h-screen bg-red-200"></div>
      <div className="h-screen bg-red-200"></div>
    </section>
  );
};

export default page;
