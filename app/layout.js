import HeadBanner from "./components/headBanner";
import MainMenu from "./components/mainMenu";
import "./globals.css";
import { Inter } from "next/font/google";
import YodaQuotes from "./components/yodaQuotes";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const revalidate = 3600;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The [UNOFFICIAL] Irish Star Wars Fan Club : Version 5.0",
  description: "The [UNOFFICIAL] Irish Star Wars Fan Club : Version 5.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeadBanner />
        <MainMenu />
        <main>
          <YodaQuotes />
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
