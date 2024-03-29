import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlockStuff",
  description: "Indonesian Minecraft Server Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">{children}</html>;
}
