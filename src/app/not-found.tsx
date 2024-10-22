import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="space-y-4">
        <h1>Opps;the page doesn't exit.</h1>
        <Link href={"/"} className="px-4 py-1 text-green-400 rounded-full">
          Go back to home page
        </Link>
      </div>
    </section>
  );
};

export default notFound;
