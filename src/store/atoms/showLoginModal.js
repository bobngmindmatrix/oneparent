"use client";

import { atom } from "recoil";
import { SHOW_LOGIN_ATOM } from "@/constants/AtomKeys";

export const showLoginAtom = atom({
  key: SHOW_LOGIN_ATOM,
  default: false,
});
