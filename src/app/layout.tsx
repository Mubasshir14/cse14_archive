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
  metadataBase: new URL("https://brurcse14th.vercel.app"),

  title: {
    default: "BRUR CSE 14th Intake | A Journey of Memories & Togetherness",
    template: "%s | BRUR CSE 14th Intake",
  },

  description:
    "An official digital archive of BRUR CSE 14th Intake, capturing unforgettable moments, memories, events, tours, and milestones from our university journey starting in January 2023.",

  keywords: [
    "BRUR",
    "BRUR CSE",
    "CSE 14th Intake",
    "BRUR CSE 14th",
    "University Memories",
    "CSE Batch Archive",
    "Student Life Bangladesh",
    "University Journey",
    "Begum Rokeya University Rangpur",
    "University Student Life Bangladesh",
    "CSE Batch Archive",
  ],

  authors: [{ name: "CSE 14th Intake, BRUR" }],
  creator: "BRUR CSE 14th Intake",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "BRUR CSE 14th Intake | Memories That Go to Infinity",
    description:
      "Explore the journey of BRUR CSE 14th Intake through events, tours, sports and unforgettable memories that define our university life.",
    url: "https://brurcse14th.vercel.app",
    siteName: "BRUR CSE 14th Intake",
    images: [
      {
        url: "https://i.ibb.co.com/VWrhQfcP/image-2026-01-28-19-18-33.png",
        width: 1200,
        height: 630,
        alt: "BRUR CSE 14th Intake Memories",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BRUR CSE 14th Intake | Memories That Go to Infinity",
    description:
      "A digital archive of memories, milestones and moments from BRUR CSE 14th Intake.",
    images: ["https://i.ibb.co.com/VWrhQfcP/image-2026-01-28-19-18-33.png"],
  },
  icons: {
    icon: "https://i.ibb.co.com/VWrhQfcP/image-2026-01-28-19-18-33.png",
    shortcut: "https://i.ibb.co.com/VWrhQfcP/image-2026-01-28-19-18-33.png",
    apple: "https://i.ibb.co.com/VWrhQfcP/image-2026-01-28-19-18-33.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
