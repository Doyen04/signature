import type { Metadata } from "next";
import { Playfair_Display, Alumni_Sans, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const alumniSans = Alumni_Sans({
  variable: "--font-alumni",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venant Cutlery — Signature Ofada Rice | Ado Ekiti",
  description:
    "Experience Venant Cutlery's Signature Ofada Rice with Insides of Meat. Rich, spicy, and unforgettable. Pre-order now in Ado Ekiti, Ekiti State.",
  keywords: [
    "Venant Cutlery",
    "Ofada Rice",
    "Signature Dish",
    "Nigerian Food",
    "Ado Ekiti",
    "Ekiti State",
    "Pre-order food",
    "Ayamase stew",
  ],
  openGraph: {
    title: "Venant Cutlery — Signature Ofada Rice",
    description: "Good Food. Great Taste. Worth the Wait! Pre-order our Signature Ofada Rice today.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      className={`${playfairDisplay.variable} ${alumniSans.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
