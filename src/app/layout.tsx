import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";
import { Providers } from "./Provider";

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
          <main className="max-w-6xl mx-auto">
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
