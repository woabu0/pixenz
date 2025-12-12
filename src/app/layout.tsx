import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pikzo0.vercel.app"),
  title: {
    default: "Pixenz - Social Media Platform for Creators",
    template: "%s | Pixenz",
  },
  description: "Pixenz is a next-generation social media platform built for creators. Connect with your community, share your story in high fidelity, and monetize your passion.",
  keywords: ["social media", "social platform", "creators", "content creators", "social network", "community", "share", "connect", "monetize", "creative platform"],
  authors: [{ name: "Pixenz" }],
  creator: "Pixenz",
  publisher: "Pixenz",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pikzo0.vercel.app",
    title: "Pixenz - Social Media Platform for Creators",
    description: "A next-generation social media platform built for creators. Connect with your community, share your story in high fidelity, and monetize your passion.",
    siteName: "Pixenz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixenz - Social Media Platform for Creators",
    description: "A next-generation social media platform built for creators. Connect with your community, share your story in high fidelity, and monetize your passion.",
    creator: "@pixenz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
