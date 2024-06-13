import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://rizz-gpt-next.vercel.app/",
  title: "GALILED SKY",
  description:
    "BEYOND ENTERTAINMENT",
  openGraph: {
    title: "GALILED SKY",
    description:
      "BEYOND ENTERTAINMENT",
    images: ["/assets/images/webp/meta.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
