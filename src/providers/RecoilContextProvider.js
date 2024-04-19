"use client";

import { RecoilRoot } from "recoil";
import React from "react";

const Providers = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Providers;
