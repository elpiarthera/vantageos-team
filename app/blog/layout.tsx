import { RootProvider } from "fumadocs-ui/provider/next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "fumadocs-ui/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="antialiased" style={{ minHeight: "100dvh" }}>
        <RootProvider
          theme={{
            defaultTheme: "dark",
            attribute: "class",
          }}
        >
          <div
            style={{
              maxWidth: "64rem",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            <header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1.5rem 0",
                borderBottom: "1px solid var(--color-fd-border)",
                marginBottom: "2rem",
              }}
            >
              <a
                href="/"
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-fd-muted-foreground)",
                  textDecoration: "none",
                  transition: "color 150ms",
                }}
              >
                ← Back to Home
              </a>
              <a
                href="/blog"
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "var(--color-fd-foreground)",
                  textDecoration: "none",
                }}
              >
                VantageTeam Blog
              </a>
            </header>
            <main>{children}</main>
            <footer
              style={{
                borderTop: "1px solid var(--color-fd-border)",
                marginTop: "4rem",
                padding: "2rem 0",
                textAlign: "center",
                fontSize: "0.875rem",
                color: "var(--color-fd-muted-foreground)",
              }}
            >
              <p>
                &copy; {new Date().getFullYear()} VantageTeam.{" "}
                <a
                  href="/"
                  style={{
                    color: "var(--color-fd-muted-foreground)",
                    textDecoration: "underline",
                  }}
                >
                  vantageteam.dev
                </a>
              </p>
            </footer>
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
