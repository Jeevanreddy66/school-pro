import type { Metadata } from "next";

import { Rethink_Sans } from "next/font/google";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "School Pro",
  description: "School Management System with all the features",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rethinkSans.className}>{children}</body>
    </html>
  );
}
