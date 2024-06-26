'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="stylesheet" href="https://use.typekit.net/apg3nei.css"></link>
      </head>
      <body>
      <div className="bg-animation w-full bg-black fixed -z-1">
        <div id="stars" className="w-full h-full"></div>
      </div>
        <Navbar/>
        
        <div className="relative z-1000"  >{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
