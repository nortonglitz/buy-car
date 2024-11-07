import type { Metadata } from "next";
import { Topbar } from "@/components";
import { Rubik } from "next/font/google"
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Buy Car",
  description: "Encontre o seu carro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          bg-neutral-50
          ${rubik.variable}
          font-rubik
        `}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
