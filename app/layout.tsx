import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kanbanly",
  description: "Unable to manage your personal and professional tasks? Kanbanly has got you! Kanbanly is a Kanban board that you can use for your daily tasks. Create, edit, and delete tasks as you want. It's simple, and it's free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cn("min-h-screen bg-background font-inter antialiased", inter.variable)} app-container`}>{children}</body>
    </html>
  );
}
