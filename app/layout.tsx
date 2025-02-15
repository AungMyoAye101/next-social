import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

export const metadata: Metadata = {
  title: "Social App",
  description: "Generated by AMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-200 dark:bg-neutral-800">
        <NavBar />
        <main className="flex gap-4 ">
          <LeftSideBar />
          {children}
          <RightSideBar />
        </main>
      </body>
    </html>
  );
}
