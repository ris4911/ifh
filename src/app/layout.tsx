import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "./(Homepage)/Components/Banner";

const red_hat_display = Red_Hat_Display({
  weight: ["400", "500", "700", "900"],
  variable: "--Red_Hat_Display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Institute for Humanities",
  description: "Meta description comes here...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${red_hat_display.variable}`}>
        <Header />
        <Banner />
        <main className="text-ellipsis">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
