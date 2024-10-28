import React from "react";

const Signin = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="name"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
      <input
        type="email"
        placeholder="email"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
      <input
        type="password"
        placeholder="password"
        className="border border-gray-300 rounded-lg shadow-md px-2 py-1"
      />
    </form>
  );
};

export default Signin;
