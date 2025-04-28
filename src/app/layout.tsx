import "@/styles/globals.css";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};
export const metadata: Metadata = {
  title: {
    default: "Amen",
    template: "%s | Amen"
  },
  description: "A modern web application built with Next.js and TypeScript",
  applicationName: "Amen",
  keywords: ["next.js", "react", "typescript", "web application"],
  authors: [{
    name: "Creatr Team"
  }],
  creator: "Amen Team",
  publisher: "Amen Team",
  icons: {
    icon: [{
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    }, {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    }, {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon"
    }],
    apple: [{
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Amen"
  },
  formatDetection: {
    telephone: false
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className={`${GeistSans.variable}`} data-unique-id="38f3de26-5d39-4848-a156-8a198944dabe" data-loc="58:9-58:61" data-file-name="app/layout.tsx">
      <body data-unique-id="255b087b-e2e1-48b9-8b9e-f8acffdad0e0" data-loc="59:6-59:12" data-file-name="app/layout.tsx">{children}</body>
    </html>;
}