import type { Metadata } from "next";
import { Pacifico, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sewna - Custom Fashion Design Platform | Connect with Designers for Dream Outfits",
  description: "Sewna - The premier platform connecting you with talented designers who bring your dream outfits to life. Join Sewna for custom clothing, bespoke fashion, and personalized design services. Create your perfect wardrobe with Sewna today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
