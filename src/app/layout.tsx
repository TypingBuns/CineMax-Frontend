import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const poppins = Poppins({ 
weight: ['100', '200', '300', '400', '500', '600','700','900'], 
subsets: ['latin'], 
style: ['normal', 'italic'], });

export const metadata: Metadata = {
  title: "CineMax",
  description: "Created by TypingBuns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
