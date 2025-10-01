import { Hind_Siliguri as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["bengali"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const fontHeading = FontSans({
  subsets: ["bengali"],
  variable: "--font-heading",
  weight: "700",
});
