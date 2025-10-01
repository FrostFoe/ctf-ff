import { Hind_Siliguri as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["bengali"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const fontHeading = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-heading",
});
