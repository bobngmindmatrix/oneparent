import { Roboto } from "next/font/google";
import "./globals.css";

import ProgressBarProvider from "@/providers/ProgressBarProvider";
import RecoilContextProvider from "@/providers/RecoilContextProvider";

export const metadata = {
  title: `One Parent`,
  description: `Connecting Parent, Children & Teacher`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ProgressBarProvider>
          <RecoilContextProvider>{children}</RecoilContextProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
