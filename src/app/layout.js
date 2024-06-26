import "./globals.css";
import "@/assets/app.scss";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import MainLayout from "@/app/MainLayout";
import AppProviders from "@/providers/AppProviders";

export const metadata = {
  title: `One Parent`,
  description: `Connecting Parent, Children & Teacher`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <AppProviders>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
      </body>
    </html>
  );
}
