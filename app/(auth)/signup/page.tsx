import React from "react";

const Signup = () => {
  return (
    <form
      action=""
      className="flex flex-col gap-4 p-4 bg-green-100 rounded w-fit mx-auto mt-10"
    >
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="email" />
      </div>
      <div>
        <input type="password" />
      </div>
      <button className="bg-blue-400 rounded-full px-4 py-1">Sign up</button>
    </form>
  );
};

export default Signup;
