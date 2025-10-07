import { Button } from "@heroui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-10 h-10 bg-[hsl(0,0%,100%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,90%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,80%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,70%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,60%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,50%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,40%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,30%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,20%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,10%)]"></div>
      <div className="w-10 h-10 bg-[hsl(0,0%,0%)]"></div>
      <Link href={'/login'}>Login</Link>
      <Link href={'/signup'}>Signup</Link>
      <div>
        <Button color="primary">Clickme</Button>
      </div>
    </div>
  );
}
