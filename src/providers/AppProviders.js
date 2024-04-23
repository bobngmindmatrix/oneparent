import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ProgressBarProvider from "@/providers/ProgressBarProvider";
import RecoilContextProvider from "@/providers/RecoilContextProvider";
import MainLayout from "@/app/MainLayout";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
const AppProviders = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AppRouterCacheProvider>
        <ProgressBarProvider>
          <RecoilContextProvider>{children}</RecoilContextProvider>
        </ProgressBarProvider>
      </AppRouterCacheProvider>
    </ReactQueryProvider>
  );
};
export default AppProviders;
