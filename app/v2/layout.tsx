import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sibo Diary — aplikacja do dziennika SIBO (wersja B)",
  description:
    "Objawy, toaleta w skali Bristol, posiłki, suplementy, woda, kroki i sen w jednym dzienniku. Przewodnik po produktach low-FODMAP i raporty tygodnia.",
};

export default function V2Layout({ children }: LayoutProps<"/v2">) {
  return <div className={jakarta.variable}>{children}</div>;
}
