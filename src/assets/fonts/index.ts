import localFont from "next/font/local";
import { Hind_Siliguri as FontSans, Urbanist } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["bengali"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const fontUrban = Urbanist({
  subsets: ["latin"],
  variable: "--font-urban",
});

export const fontHeading = localFont({
  src: "./CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const fontGeist = localFont({
  src: "./GeistVF.woff2",
  variable: "--font-geist",
});
