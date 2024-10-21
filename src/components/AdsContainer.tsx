import React from "react";
import AdsCard from "./ui/AdsCard";

const AdsContainer = () => {
  return (
    <section className="flex flex-col gap-4 px-2">
      <AdsCard />
      <AdsCard />
      <AdsCard />
    </section>
  );
};

export default AdsContainer;
