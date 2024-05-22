import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from "next/font/google";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { QueryProvider } from "@/lib/queryProvider";
import {AuthProvider} from "@/contexts/AuthContext";
import {auth} from "@/auth";
import {SessionProvider} from "next-auth/react";

const poppins = Poppins({
weight: ['100', '200', '300', '400', '500', '600','700','900'],
subsets: ['latin'],
style: ['normal', 'italic'], });

export const metadata: Metadata = {
  title: "CineMax",
  description: "Created by TypingBuns",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="pl">
      <body className={poppins.className}>
      <SessionProvider session={session}>
        <QueryProvider>
          <Navbar session={session} />
            {children}
          <Footer/>
        </QueryProvider>
      </SessionProvider>
      </body>
    </html>
  );
}
