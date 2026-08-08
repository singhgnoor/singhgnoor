import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurnoor Singh — Systems / AI / Architecture",
  description: "Portfolio of Gurnoor Singh, B.Tech Computer Science and Engineering student at IIT Ropar.",
  authors: [{ name: "Gurnoor Singh" }],
  verification: {
    google: "eV6wBwrT-Lb9QA8KH-VY_VvWnAQzWOCqhAEEK4Vc3AM",
  },
  icons: {
    icon: ["/favicon.ico", "/favicon-16x16.png", "/favicon-32x32.png", "/icon-192.png", "/icon-512.png"],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
