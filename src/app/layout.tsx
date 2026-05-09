import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HumbleWalking — Your Global Education Partner",
    template: "%s | HumbleWalking",
  },
  description:
    "Complete study abroad services — from university selection to post-landing support. Connect with expert mentors and navigate your international education journey.",
  keywords: [
    "study abroad",
    "international education",
    "visa services",
    "test prep",
    "scholarships",
    "mentorship",
  ],
  authors: [{ name: "HumbleWalking" }],
  creator: "HumbleWalking",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://humblewalking.com",
    siteName: "HumbleWalking",
    title: "HumbleWalking — Your Global Education Partner",
    description:
      "Complete study abroad services — from university selection to post-landing support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HumbleWalking - Your Global Education Partner",
    description:
      "Complete study abroad services — from university selection to post-landing support.",
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
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
