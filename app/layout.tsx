import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-title",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PPF Đồng Nai | Dán Phim Bảo Vệ Sơn Xe Hơi & Xe Máy Cao Cấp",
  description: "PPF Đồng Nai chuyên dán phim bảo vệ sơn xe hơi, xe máy cao cấp từ chất liệu TPU nhập khẩu. Chống trầy xước, tự phục hồi, bảo hành chính hãng 10 năm tại Biên Hòa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "PPF Đồng Nai",
    "description": "PPF Đồng Nai chuyên dán phim bảo vệ sơn xe hơi, xe máy cao cấp chất liệu TPU nhập khẩu tại Biên Hòa.",
    "url": "https://facebook.com/ppfdongnai",
    "telephone": "+84961090628",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10A/7 Xa Lộ Hà Nội, Khu Phố 5, Phường Tam Hiệp",
      "addressLocality": "Biên Hòa",
      "addressRegion": "Đồng Nai",
      "addressCountry": "VN"
    },
    "priceRange": "VND",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="vi" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
