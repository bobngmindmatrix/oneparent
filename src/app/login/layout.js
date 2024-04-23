import "@/app/globals.css";
import "@/assets/app.scss";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import AppProviders from "@/providers/AppProviders";
export const metadata = {
  title: `Login`,
  description: `Login page`,
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
