import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex gap-4">
        <Link href={"/signup"} className="px-4 py-2 bg-blue-400 rounded-lg">
          SignUp
        </Link>
        <Link href={"/Login"} className="px-4 py-2 bg-purple-400 rounded-lg">
          Login
        </Link>
      </div>
    </section>
  );
}
