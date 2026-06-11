import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollToHash } from "@/components/ScrollToHash";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EKC Digital | Professional Websites for Small Businesses",
    template: "%s | EKC Digital",
  },
  description:
    "EKC Digital builds fast, professional websites for small businesses. Custom design, fixed pricing, and ongoing support to help you win more customers online.",
  keywords: [
    "web design",
    "small business websites",
    "professional websites",
    "website templates",
    "affordable web design",
  ],
  authors: [{ name: "EKC Digital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EKC Digital",
    title: "EKC Digital | Professional Websites for Small Businesses",
    description:
      "We build websites that help businesses grow. Fast delivery, fixed pricing, and ongoing support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <ScrollToHash />
        {children}
      </body>
    </html>
  );
}
