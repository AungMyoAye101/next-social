import React from "react";

const RightSideBar = () => {
  return (
    <section className="coustom-scrollbar page_padding  sticky top-0  w-80 flex flex-col  gap-4 h-screen overflow-hidden overflow-y-scroll">
      {Array(16)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white  rounded-lg p-1"
          >
            <div className="size-10 bg-purple-500 rounded-full "></div>
            <p className="font-semibold">Name</p>
          </div>
        ))}
    </section>
  );
};

export default RightSideBar;
