import { Roboto } from "next/font/google";
import "./globals.css";

import ProgressBarProvider from "@/providers/ProgressBarProvider";
import RecoilContextProvider from "@/providers/RecoilContextProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
export const metadata = {
  title: `One Parent`,
  description: `Connecting Parent, Children & Teacher`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppRouterCacheProvider>
          <ProgressBarProvider>
            <RecoilContextProvider>{children}</RecoilContextProvider>
          </ProgressBarProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
