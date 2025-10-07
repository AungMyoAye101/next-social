import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import Navbar from "@/components/navbar";


export const metadata: Metadata = {
  title: "Social media app",

  description: "Make By AMA",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className="dark:bg-[hsl(0,0%,10%)] bg-[hsl(0,0%,90%)]"
      >
        <Providers>
          <div className=" max-w-7xl mx-auto gap-4 md:gap-6 relative flex flex-col h-screen ">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 ">
              {children}
            </main>

          </div>
        </Providers>
      </body>
    </html>
  );
}
