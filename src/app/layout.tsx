// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google"; // Import Open Sans from Google Fonts
import "./globals.css";
import NavBar from "@/components/navBar";
import HamBar from "@/components/hamBar";
import Footer from "@/components/footer";

// Local fonts
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

// Open Sans font configuration
const openSans = Open_Sans({
  subsets: ["latin"], // Adjust subset if needed
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s - santech",
    default: "santech",
  },
  description: "San Tech is a leading software development company offering custom software, website development, mobile apps, AI solutions, and drag-and-drop website builders to help businesses grow and succeed.",

  keywords: "San Tech, website Development, developement , Software Company, Gamma, Developer,Property Dealers,Property ,Property Management,Bisma Emar,Sanan, development",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased overflow-x-hidden`}
      >
        <div className="hidden lg:block">
          <NavBar />
        </div>

        <div className="block  lg:hidden w-full">
          <HamBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
