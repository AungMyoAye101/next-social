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
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
