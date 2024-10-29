import Signin from "@/components/signin";
import { connectToDb } from "@/lib/connectToDb";
import User from "@/lib/model/User";

const page = () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default page;
