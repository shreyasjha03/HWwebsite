import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "EduBridge — Your Global Education Partner",
    template: "%s | EduBridge",
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
  authors: [{ name: "EduBridge" }],
  creator: "EduBridge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edubridge.com",
    siteName: "EduBridge",
    title: "EduBridge — Your Global Education Partner",
    description:
      "Complete study abroad services — from university selection to post-landing support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduBridge — Your Global Education Partner",
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
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
