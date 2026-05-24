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
  title: "MediCare Hospital - Modern Healthcare and Patient Services",
  description:
    "MediCare Hospital delivers compassionate, technology-enabled healthcare with emergency support, advanced diagnostics, specialty treatment, and seamless patient care.",
  keywords: [
    "hospital care",
    "medical services",
    "patient care",
    "emergency treatment",
    "diagnostics",
    "MediCare Hospital",
  ],
  authors: [{ name: "MediCare Hospital" }],
  openGraph: {
    title: "MediCare Hospital - Modern Healthcare and Patient Services",
    description:
      "Comprehensive hospital care with emergency response, specialist consultations, diagnostics, and recovery support.",
    type: "website",
    locale: "en_IN",
    siteName: "MediCare Hospital",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediCare Hospital - Modern Healthcare and Patient Services",
    description:
      "Modern hospital care designed around patients, families, and better clinical outcomes.",
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
