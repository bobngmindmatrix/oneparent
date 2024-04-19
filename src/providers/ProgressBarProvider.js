"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

const Providers = ({ children }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#000"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
