import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { APP_DESCRIPTION, APP_NAME, getSiteUrl } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...createMetadata({
    title: APP_NAME,
    description: APP_DESCRIPTION,
    path: "/",
  }),
  verification: {
    google: "kGpJuNST8JUQbxWJ6UNjVWcqAOHnUMz0-2X0W2-SX9U",
    yandex: "PASTE_YANDEX_VERIFICATION_CODE_HERE",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "UniConfess",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
