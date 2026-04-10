import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "みやざきガイド | 宮崎県の魅力を届けるコミュニティサイト",
  description:
    "宮崎県の観光スポット・グルメ・市町村情報を網羅したコミュニティ向けガイド。チキン南蛮、高千穂峡、青島など宮崎の魅力を徹底紹介。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
