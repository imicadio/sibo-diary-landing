import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800", "900"],
});

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Sibo Diary — dziennik objawów SIBO na cały dzień",
  description:
    "Objawy, toaleta w skali Bristol, posiłki, suplementy, woda, kroki i sen w jednym dzienniku. Przewodnik po produktach low-FODMAP, jadłospis i raport tygodnia.",
  manifest: `${base}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${base}/favicon.ico`, sizes: "48x48" },
      { url: `${base}/favicon.svg`, type: "image/svg+xml" },
    ],
    apple: `${base}/apple-touch-icon.png`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0E5E56",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}
