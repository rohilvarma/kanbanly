import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], weight: ["700"] });

export {
  inter,
  oswald
}
