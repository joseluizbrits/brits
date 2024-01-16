import type { Metadata } from "next";
import { ubuntu } from "@/lib/fonts";

import StylesProvider from "@/styles/StylesProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Brits",
  description: "Brits | Desenvolvimento web front-end",
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
          <Header />
          <main>{children}</main>
        </StylesProvider>
      </body>
    </html>
  );
}
