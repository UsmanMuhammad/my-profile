import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

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
      <Head>
        <link rel="shortcut icon" href="../public/icons/logo.png" />
      </Head>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
