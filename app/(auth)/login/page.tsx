import { SignIn } from "@/components/SignIn";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <section className="page_padding flex-1 ">
      <SignIn />
    </section>
  );
}
