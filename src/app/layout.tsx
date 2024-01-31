import type { Metadata } from "next";
import { ubuntu } from "@/lib/fonts";

import StylesProvider from "@/styles/StylesProvider";
import PopupProvider from "@/contexts/PopupContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Criação de sites profissionais | BRITS Desenvolvimento Web",
  description:
    "Está pensando em criar um site? Inicie agora sua presença online com um design exclusivo e profissional. Descubra aquele orçamento que cabe no seu bolso!",
  keywords: [
    "site",
    "website",
    "site profissional",
    "website profissional",
    "front-end",
    "desenvolvimento de sites",
    "desenvolvimento de websites",
    "desenvolvimento front-end",
    "criação de sites",
    "criador de websites",
    "desenvolvedor de sites",
    "desenvolvedor de websites",
    "desenvolvedor front-end",
    "design",
    "web design",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  metadataBase: new URL("https://brits.com.br"),
  openGraph: {
    title: "Criação de sites profissionais | BRITS Desenvolvimento Web",
    description:
      "Está pensando em criar um site? Inicie agora sua presença online com um design exclusivo e profissional. Descubra aquele orçamento que cabe no seu bolso!",
    type: "website",
    url: "https://brits.com.br",
    siteName: "BRITS",
    locale: "pt_BR",
  },
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
