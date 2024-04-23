"use client";
import React from "react";
import { useIsMobile } from "@/hooks/common";
import { SwipeableDrawer } from "@mui/material";
import Logo from "@/components/Common/Logo";
import SideMenuItem from "@/components/Common/SideMenu/SideMenuItem";
import { usePathname, useRouter } from "next/navigation";

const items = [
  {
    key: "dashboard",
    label: "Dashboard",
    url: "/dashboard",
    icon: null,
  },
  {
    key: "certificate",
    label: "Certificate",
    url: "/certificate",
    icon: null,
  },
];

const hideSideBarRoutes = ["/login", "/register"];

const SideMenu = ({}) => {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const render = () => {
    return (
      <div className={"flex flex-col w-full gap-6 py-6 px-4"}>
        <div className={"w-full flex items-center justify-center"}>
          <Logo width={150} />
        </div>
        <div className={"mt-20 flex flex-col"}>
          {items.map((item) => (
            <SideMenuItem
              key={item.key}
              label={item.label}
              active={pathname.includes(item.url)}
              url={item.url}
            />
          ))}
        </div>
      </div>
    );
  };

  if (isMobile) {
    return <SwipeableDrawer>{render()}</SwipeableDrawer>;
  } else {
    return (
      <aside className={"w-[300px] bg-white shadow shrink-0"}>{render()}</aside>
    );
  }
};
export default SideMenu;
