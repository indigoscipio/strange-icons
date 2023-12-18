import Footer from "../components/Footer";
import Nav from "../components/Nav";
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "strangeicons | Healthcare & Biotech UI Icons | 3,000+ Libraries",
  description:
    "Streamline your healthcare  & biotech projects with a collection of holistic UI icons from strangeicons. Design cutting-edge healthcare user interfaces efficiently.",
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

export default function RootLayout({ children }) {
  return (
    <html className={`${roobert.className} scroll-smooth`} lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
