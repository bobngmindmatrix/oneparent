"use client";
import React from "react";
import UserAvatar from "@/components/Common/TopBar/UserAvatar/UserAvatar";
const TopBar = () => {
  return (
    <div
      className={`flex w-full items-center justify-between rounded-full bg-white pl-6`}
    >
      <h2 className={"text-xl font-semibold"}>{document?.title}</h2>
      <div className={"flex items-center gap-6"}>
        <UserAvatar />
      </div>
    </div>
  );
};
export default TopBar;
