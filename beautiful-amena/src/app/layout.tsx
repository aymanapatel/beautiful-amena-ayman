import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ogImage from './images/moon-lamp.png'


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
  title: "Beautiful Amena",
  description: "All things for Amena",
  openGraph: {
    title: "Beautiful Amena",
    description: "All things for Amena",
    images: [
      {
        url: ogImage.src, // Use .src to get the path
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
