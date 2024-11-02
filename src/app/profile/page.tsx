import React from "react";

const Profile = () => {
  return (
    <section className="flex flex-col gap-4 ">
      <div className="flex justify-center items-end">
        <div className="size-20 rounded-full bg-purple-500"></div>
      </div>
      <div>
        <h1>Name</h1>
        <h2>Email@gmail.com</h2>
        <p>Lost and Life of the king.</p>
      </div>
    </section>
  );
};

export default Profile;
