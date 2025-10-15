import Post from "@/components/post";
import { Button } from "@heroui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-4">

      <Link href={'/login'}>Login</Link>
      <Link href={'/signup'}>Signup</Link>

      <Button color="primary">Clickme</Button>
      <Post />

    </div>
  );
}
