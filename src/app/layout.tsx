import type { Metadata } from "next";

import "./globals.css";
import Nav from "@/components/NavBar";
import { Providers } from "./Provider";
import SideMenu from "@/components/SideMenu";
import Ads from "@/components/Ads";

export const metadata: Metadata = {
  title: "Social App",
  description: "Generated AMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="max-w-7xl mx-auto">
            <Nav />
            <section className="relative  flex gap-4 justify-center py-4 ">
              <div className="hidden w-[25%] md:block">
                <SideMenu />
              </div>

              <main className="w-full md:w-[45%] flex flex-col h-screen gap-4  px-6 overflow-hidden overflow-y-scroll">
                {children}
              </main>
              <div className="hidden w-[25%] md:flex flex-col gap-4 ">
                <Ads />
                <Ads />
              </div>
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
