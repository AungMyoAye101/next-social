
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";




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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
