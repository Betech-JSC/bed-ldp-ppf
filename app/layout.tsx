import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-title",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PPF Đồng Nai | Dán Phim Bảo Vệ Sơn Xe Hơi & Xe Máy Cao Cấp Tại Biên Hòa",
  description: "PPF Đồng Nai chuyên dán phim bảo vệ sơn xe hơi, xe máy chất liệu TPU nhập khẩu Mỹ. Chống trầy xước đá dăm, tự phục hồi vết xước, bảo hành chính hãng 10 năm tại Biên Hòa, Đồng Nai.",
  keywords: [
    "dán ppf đồng nai",
    "dán ppf biên hòa",
    "dán phim bảo vệ sơn xe hơi",
    "dán ppf xe máy biên hòa",
    "phim ppf tpu cao cấp",
    "dán keo xe máy đồng nai",
    "ppf ô tô biên hòa",
    "chống trầy xước xe hơi"
  ],
  authors: [{ name: "PPF Đồng Nai" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PPF Đồng Nai | Dán Phim Bảo Vệ Sơn Xe Hơi & Xe Máy Cao Cấp",
    description: "Chuyên dán phim bảo vệ sơn PPF TPU cao cấp cho ô tô & xe máy tại Biên Hòa, Đồng Nai. Tự phục hồi vết xước, chống ố vàng, bảo hành lên tới 10 năm.",
    url: "https://facebook.com/ppfdongnai",
    siteName: "PPF Đồng Nai",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/ford-ppf.png",
        width: 1200,
        height: 630,
        alt: "Thi công dán phim bảo vệ sơn PPF Đồng Nai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPF Đồng Nai | Dán Phim Bảo Vệ Sơn Xe Hơi & Xe Máy Cao Cấp",
    description: "Dán phim bảo vệ sơn PPF TPU cao cấp chống trầy xước, tự phục hồi tại Biên Hòa, Đồng Nai.",
    images: ["/images/ford-ppf.png"],
  },
  alternates: {
    canonical: "https://facebook.com/ppfdongnai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "@id": "https://facebook.com/ppfdongnai/#autobodyshop",
    "name": "PPF Đồng Nai",
    "image": "/images/logo.png",
    "description": "Trung tâm dán phim bảo vệ sơn PPF TPU xe hơi & xe máy chuyên nghiệp số 1 tại Biên Hòa, Đồng Nai.",
    "url": "https://facebook.com/ppfdongnai",
    "telephone": "+84818398868",
    "email": "ppfdongnai@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10A/7 Xa Lộ Hà Nội, Khu Phố 5, Phường Tam Hiệp",
      "addressLocality": "Biên Hòa",
      "addressRegion": "Đồng Nai",
      "postalCode": "810000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.9575,
      "longitude": 106.8427
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/ppfdongnai",
      "https://scarcityvietnam.com.vn"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dán Phim Bảo Vệ Sơn PPF TPU Cao Cấp",
    "provider": {
      "@type": "AutoBodyShop",
      "name": "PPF Đồng Nai"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Đồng Nai"
    },
    "description": "Dịch vụ dán phim bảo vệ sơn PPF TPU cho xe hơi và xe máy chống đá dăm, tự phục hồi vết xước, giữ màu sơn nguyên bản."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Dán PPF có làm ảnh hưởng đến lớp sơn zin của xe không?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hoàn toàn KHÔNG. Màng phim PPF TPU cao cấp được thiết kế với lớp keo acrylic an toàn tuyệt đối. Khi bóc bỏ sau nhiều năm sử dụng, phim không để lại bất kỳ vết keo nào và hoàn toàn không làm tróc lớp sơn zin nguyên bản của xe."
        }
      },
      {
        "@type": "Question",
        "name": "Khả năng tự phục hồi vết xước của PPF hoạt động thế nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chất liệu TPU (Polyurethane nhiệt dẻo) có tính đàn hồi cao. Khi bề mặt bị xước dăm nhẹ, cấu trúc phân tử của màng phim chỉ bị xê dịch tạm thời. Khi gặp nhiệt độ ấm từ ánh nắng mặt trời hoặc nước ấm rửa xe, các liên kết phân tử sẽ giãn nở trở lại vị trí cũ, làm vết xước biến mất hoàn toàn."
        }
      }
    ]
  };

  return (
    <html lang="vi" className={`${beVietnamPro.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
