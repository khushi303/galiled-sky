import "./globals.css";
export const metadata = {
  metadataBase: "https://galiled-sky.vercel.app/",
  title: "GALILED SKY",
  description:
    "Beyond Entertainment",
  openGraph: {
    title: "GALILED SKY",
    description:
      "Beyond Entertainment",
    images: ["/assets/images/webp/meta.webp"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
