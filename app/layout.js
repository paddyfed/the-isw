import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The [UNOFFICIAL] Irish Star Wars Fan Club : Version 5.0",
  description: "The [UNOFFICIAL] Irish Star Wars Fan Club : Version 5.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
