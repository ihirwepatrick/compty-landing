import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campty - Cabin In The Woods But In A Good Way!",
  description: "Enjoy camping anywhere and anytime. Safe camping experiences with 1K+ destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
