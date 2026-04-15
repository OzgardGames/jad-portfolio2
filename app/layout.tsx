import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";


import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Jad Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sora.variable}`}>
        {children}
      </body>
    </html>
  );
}