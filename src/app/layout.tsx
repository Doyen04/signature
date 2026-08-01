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
  metadataBase: new URL("https://venantcutlery.com"), // Update to your production domain when deployed
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
    title: "Venant Cutlery — Signature Ofada Rice | Ado Ekiti",
    description: "Good Food. Great Taste. Worth the Wait! Pre-order our Signature Ofada Rice with Insides of Meat today.",
    url: "https://venantcutlery.com",
    siteName: "Venant Cutlery",
    images: [
      {
        url: "/ofada-hero.png",
        width: 1200,
        height: 630,
        alt: "Venant Cutlery Signature Ofada Rice",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venant Cutlery — Signature Ofada Rice | Ado Ekiti",
    description: "Good Food. Great Taste. Worth the Wait! Pre-order our Signature Ofada Rice with Insides of Meat today.",
    images: ["/ofada-hero.png"],
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
