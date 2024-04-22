import "./globals.css";
import "@/assets/app.scss";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
import ProgressBarProvider from "@/providers/ProgressBarProvider";
import RecoilContextProvider from "@/providers/RecoilContextProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import CustomLayout from "@/app/CustomLayout";
export const metadata = {
  title: `One Parent`,
  description: `Connecting Parent, Children & Teacher`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <ReactQueryProvider>
          <AppRouterCacheProvider>
            <ProgressBarProvider>
              <RecoilContextProvider>
                <CustomLayout>{children}</CustomLayout>
              </RecoilContextProvider>
            </ProgressBarProvider>
          </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
