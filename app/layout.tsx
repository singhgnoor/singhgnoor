import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gurnoor Singh — Systems / AI / Architecture",
  description: "Portfolio of Gurnoor Singh, B.Tech Computer Science and Engineering student at IIT Ropar.",
  authors: [{ name: "Gurnoor Singh" }],
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
