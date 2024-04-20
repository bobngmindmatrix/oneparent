"use client";

import { atom } from "recoil";
import { SHOW_LOGIN_ATOM } from "@/store/atoms/keys";

export const showLoginAtom = atom({
  key: SHOW_LOGIN_ATOM,
  default: false,
});
