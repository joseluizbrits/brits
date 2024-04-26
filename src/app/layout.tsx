import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";

import { GoogleAnalytics } from "@next/third-parties/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import StylesProvider from "@/styles/StylesProvider";
import PopupProvider from "@/contexts/PopupContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className={poppins.className}>
        <StylesProvider>
          <PopupProvider>
            <Header />
            {children}
            <Footer />
          </PopupProvider>
        </StylesProvider>
        <GoogleAnalytics gaId="G-6TLCXHMYYH" />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
