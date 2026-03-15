import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
  metadataBase: new URL("https://team.vantageos.agency"),
  title:
    "VantageOS Team — Your Complete AI Team | 16 Teams, 77 Agents, 192 Skills",
  description:
    "Hire a complete AI team starting at EUR 490/month. 16 specialized departments, 77 AI agents, 192 skills — supervised by a tech executive with 25 years of experience. No tool to learn. Cancel anytime.",
  openGraph: {
    title: "VantageOS Team — Your Complete AI Team",
    description:
      "16 departments, 77 agents, 192 skills. Send tasks by email, get results back. Starting at EUR 490/month.",
    type: "website",
    url: "https://team.vantageos.agency",
    images: [
      {
        url: "/og-team.png",
        width: 1200,
        height: 630,
        alt: "VantageOS Team - Your Complete AI Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VantageOS Team — Your Complete AI Team",
    description:
      "16 departments, 77 agents, 192 skills. Starting at EUR 490/month.",
    images: ["/og-team.png"],
  },
  alternates: {
    languages: {
      en: "/",
      fr: "/fr",
    },
  },
  keywords: [
    "AI team",
    "virtual team",
    "AI agents",
    "team as a service",
    "équipe IA",
    "assistant IA",
    "marketing AI",
    "development team",
    "content creation",
    "SEO audit",
    "lead generation",
    "VantageOS",
    "Perello Consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
