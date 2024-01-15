import type { Metadata } from "next";
import { ubuntu } from "@/lib/fonts";

import StylesProvider from "@/styles/StylesProvider";

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
          <main>{children}</main>
        </StylesProvider>
      </body>
    </html>
  );
}
