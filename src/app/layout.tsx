import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/RobotoMono-Regular.ttf",
      weight: "400"
    },
    {
      path: "../../public/fonts/RobotoMono-Bold.ttf",
      weight: "700"
    }
  ],
  variable: "--font-roboto"
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/Inter-Regular.woff",
      weight: "400"
    },
    {
      path: "../../public/fonts/Inter/Inter-Bold.woff",
      weight: "700"
    }
  ],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Profile - Muhammad",
  description: "Muhammad Usman Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
