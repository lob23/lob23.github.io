import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bao-Long Ho (Leon Ho) | Cybersecurity & AI Developer",
  description: "Portfolio of Bao Long Ho (Leon Ho), cybersecurity analyst, AI learner, and software developer.",
  keywords: [
    "Bao Long Ho", 
    "Leon Ho", 
    "Bao-Long Ho", 
    "Cybersecurity Analyst", 
    "Software Developer", 
    "AI Learner"
  ],
  authors: [{ name: "Bao Long Ho (Leon Ho)" }],
  openGraph: {
    title: "Bao-Long Ho (Leon Ho)",
    description: "Portfolio of Bao Long Ho (Leon Ho)",
    url: "https://lob23.github.io/",
    siteName: "Bao Long Ho Portfolio",
    type: "website",
  },
  verification: {
    google: "OnxXdUeHXBYcdKXk5SwCXKbSfZFyoxX6lBqw7DP-O_8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Khai báo Dữ liệu cấu trúc (JSON-LD) cho Google Entity
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bao Long Ho",
    alternateName: "Leon Ho", // Khai báo tên gọi khác để Google đồng bộ từ khóa
    url: "https://lob23.github.io/",
    jobTitle: "Cybersecurity Analyst & Software Developer",
    sameAs: [
      "https://github.com/lob23", // Hãy thay bằng link GitHub/LinkedIn chính xác của bạn
    ],
  };

  return (
    <html lang="en">
      <body>
        {/* Nhúng mã Schema JSON-LD vào head/body */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
      </body>
    </html>
  );
}