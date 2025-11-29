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
    default: "Pixenz - Connect. Share. Inspire.",
    template: "%s | Pixenz",
  },
  description: "Pixenz is a modern social media platform where creativity meets community. Share photos, videos, and moments that matter, while discovering inspiring content from creators around the world.",
  keywords: ["social media", "social platform", "creators", "community", "share", "connect", "inspire"],
  authors: [{ name: "Pixenz" }],
  creator: "Pixenz",
  publisher: "Pixenz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pikzo0.vercel.app",
    title: "Pixenz - Connect. Share. Inspire.",
    description: "The next-generation social platform where creativity meets community.",
    siteName: "Pixenz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixenz - Connect. Share. Inspire.",
    description: "The next-generation social platform where creativity meets community.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
