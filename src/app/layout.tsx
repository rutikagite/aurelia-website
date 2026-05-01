import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurelia Innovatives — AI Development, Consultancy & Resource Augmentation",
  description: "Aurelia Innovatives builds production AI systems, advises on AI strategy, and provides vetted AI engineers for enterprise teams. Pune, India. Available globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col selection:bg-blue-200">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
