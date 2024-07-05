import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner"
import { Navbar } from "@/components/component/navbar";
import { SubNavbar } from "@/components/component/sub-navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Unturned Asset ID viewer",
  description: "View Unturned item IDs with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />

      <body
        className={cn(
          "min-h-screen bg-background font-inter antialiased",
          inter.className
        )}
      >
        <Navbar />
        <SubNavbar />

        {children}

        <Toaster />
      </body>
    </html>
  );
}
