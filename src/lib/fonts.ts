import { Lato, Montserrat, Ubuntu } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
