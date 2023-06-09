import "./globals.css";
import Image from "next/image";
import React from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
