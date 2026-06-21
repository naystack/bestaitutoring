import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best AI Tutoring",
  description:
    "A parent's honest, hands-on look at AI tutoring tools for kids, what's actually changing how children learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
