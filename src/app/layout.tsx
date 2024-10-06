import type { Metadata } from "next";
import { Inter as InterFont } from 'next/font/google'


const Inter = InterFont({
  variable: "--font-inter",
  weight: ["400", "600", "800"],
  subsets: ["latin"],
})

import "./globals.css";

export const metadata: Metadata = {
  title: "Juanita Garden Tour",
  description: "Come see the beautiful gardens of Juanita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
