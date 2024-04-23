"use client";
import React from "react";
import SideMenu from "@/components/Common/SideMenu/SideMenu";
import TopBar from "@/components/Common/TopBar/TopBar";
import { useRequireLogin } from "@/hooks/auth";
const MainLayout = ({ children }) => {
  useRequireLogin();

  return (
    <main className={"flex bg-gray-100 min-h-screen"}>
      <SideMenu />
      <div className={"flex flex-col flex-1 p-4 md:p-6"}>
        <TopBar />
        {children}
      </div>
    </main>
  );
};
export default MainLayout;
