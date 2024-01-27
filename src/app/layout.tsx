import type { Metadata } from "next";
import { ubuntu } from "@/lib/fonts";

import StylesProvider from "@/styles/StylesProvider";
import PopupProvider from "@/contexts/PopupContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "BRITS",
  description: "BRITS | Desenvolvimento web front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.className}>
        <StylesProvider>
          <PopupProvider>
            <SmoothScroll>
              <Header />
              {children}
              <Footer />
            </SmoothScroll>
          </PopupProvider>
        </StylesProvider>
      </body>
    </html>
  );
}
