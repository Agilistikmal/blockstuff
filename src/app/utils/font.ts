import { Silkscreen } from "next/font/google";

const silkscreen_init = Silkscreen({
  subsets: ["latin"],
  variable: "--font-silkscreen",
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const silkscreen = silkscreen_init.className;
