import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Grantly | Scholarships, made manageable", description: "Discover, organise and apply for scholarships." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
