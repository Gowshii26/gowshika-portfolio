import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Gowshika M — Software Engineer · Full-stack · Applied ML",
  description:
    "Engineering portfolio of Gowshika M: software systems, full-stack products, backend engineering, applied ML, code intelligence, anomaly detection, and privacy-first AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${mono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
