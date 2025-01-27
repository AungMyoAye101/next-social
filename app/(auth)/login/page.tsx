import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <form
          action=""
          className="flex flex-col gap-4 bg-slate-100 p-4 rounded-md"
        >
          <label>
            Email
            <input name="email" type="email" />
          </label>
          <label>
            Password
            <input name="password" type="password" />
          </label>
          <button>Sign In</button>
        </form>
      </div>
    </main>
  );
}
