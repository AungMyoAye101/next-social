import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/NavBar";

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
        <main className="max-w-6xl mx-auto">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
