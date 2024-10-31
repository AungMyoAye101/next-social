import { auth } from "@/auth";
import Link from "next/link";

const NavBar = async () => {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 border-b border-b-gray-100 py-2 sticky top-0 left-0 right-0">
      <div>
        <Link href={"/"} className="text-2xl md:text-3xl font-bold font-serif">
          Socail
        </Link>
      </div>
      <div className="text-2xl font-semibold font-serif">
        <Link href="/" className="px-4 py-2 rounded hover:bg-blue-400">
          Home
        </Link>
        <Link href="/" className="px-4 py-2 rounded hover:bg-blue-400">
          About
        </Link>
        <Link href="/" className="px-4 py-2 rounded hover:bg-blue-400">
          Friend
        </Link>
        <Link href="/" className="px-4 py-2 rounded hover:bg-blue-400">
          Setting
        </Link>
      </div>

      <div className="flex items-center gap-2">
        {session?.user ? (
          <>
            <Link
              href={"/"}
              className="px-4 py-2 rounded-full shadow-sm bg-blue-400 text-neutral-50"
            >
              Sign Out
            </Link>
            <div className="size-10 bg-blue-400 rounded-full"></div>
          </>
        ) : (
          <>
            {" "}
            <Link
              href={"/signup"}
              className="px-4 py-2 rounded-full shadow-sm bg-blue-400 text-neutral-50"
            >
              Sign up
            </Link>
            <Link
              href={"/login"}
              className="px-4 py-2 rounded-full shadow-sm bg-blue-400 text-neutral-50"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
