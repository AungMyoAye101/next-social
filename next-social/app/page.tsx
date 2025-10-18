import Post from "@/components/post";
import AllUser from "@/components/user/allUser";
import { Button } from "@heroui/button";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Home() {

  return (
    <div className="flex flex-col gap-4">

      <Link href={'/login'}>Login</Link>
      <Link href={'/signup'}>Signup</Link>

      <Button color="primary">Clickme</Button>
      <Post />
      <AllUser />

    </div>
  );
}
