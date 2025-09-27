
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social APP",
  description: "This is socail media app make by Aun Myo Aye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >

        <div className="max-w-7xl mx-auto bg-blue-300">


          {children}
        </div>
      </body>
    </html>
  );
}
