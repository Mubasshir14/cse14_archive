import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRUR CSE 14th Intake | A Journey of Memories & Togetherness",
  description:
    "An official digital archive of BRUR CSE 14th Intake, capturing unforgettable moments, memories, events, tours, and milestones from our university journey starting in January 2023.",
  keywords: [
    "BRUR",
    "CSE 14th Intake",
    "BRUR CSE",
    "University Memories",
    "CSE Batch Archive",
    "Student Life Bangladesh",
    "University Journey",
    "BRUR Students",
  ],
  authors: [{ name: "CSE 14th Intake, BRUR" }],
  creator: "BRUR CSE 14th Intake",
  openGraph: {
    title: "BRUR CSE 14th Intake | Memories That Go to Infinity",
    description:
      "Explore the journey of BRUR CSE 14th Intake through events, picnics, tours, sports and unforgettable memories that define our university life.",
    type: "website",
    locale: "en_US",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
