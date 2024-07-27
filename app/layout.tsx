import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import { inter } from "@/lib/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kanbanly",
  description:
    "Unable to manage your personal and professional tasks? Kanbanly has got you! Kanbanly is a Kanban board that you can use for your daily tasks. Create, edit, and delete tasks as you want. It's simple, and it's free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cn(
          "min-h-screen bg-background font-inter antialiased dark",
          inter.variable
        )} app-container`}
      >
        <main className="sm:flex">
          <Sidebar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
