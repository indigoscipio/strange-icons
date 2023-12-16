import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strange UI Icons",
  description: "By Samuel Oktavianus",
};

const roobert = localFont({
  src: [
    {
      path: "../public/fonts/Roobert-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Roobert-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Roobert-SemiBold.otf",
      weight: "650",
    },
  ],
  variable: "--font-roobert",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${roobert.className} scroll-smooth`} lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
