import Signin from "@/components/signin";
import { connectToDb } from "@/lib/connectToDb";
import User from "@/lib/model/User";
import React from "react";

const page = async () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default page;
