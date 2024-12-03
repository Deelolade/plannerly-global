import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { HeaderWrapper } from "@/components/Header/HeaderWrapper"
import { ScrollToTop } from "@/components/ScrollToTop"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Freestyle Distribution Business Dashboard",
  description: "Manage tasks, timesheets, resources, notes, and email assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <HeaderWrapper />
          <main className="flex-1">
            {children}
          </main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}