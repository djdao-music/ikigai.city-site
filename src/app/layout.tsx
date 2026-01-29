import type { Metadata } from "next";
import { Syne, Crimson_Pro, Dancing_Script } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ikigai.city | An Abundance Era Economy",
  description: "Welcome to ikigai.city - a spiritual digital city for founders and creatives to do their life's work of mastery.",
  icons: {
    icon: "/ikigai-logo-symbol.svg",
    apple: "/ikigai-logo-symbol.svg",
  },
  openGraph: {
    title: "ikigai.city | An Abundance Era Economy",
    description: "Welcome to ikigai.city",
    url: "https://ikigai.city",
    siteName: "ikigai.city",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${crimsonPro.variable} ${dancingScript.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
