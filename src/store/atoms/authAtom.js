"use client";

import { atom } from "recoil";
import { AUTH_ATOM } from "@/store/atoms/keys";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      console.debug("Auth atom changed: ", newValue);
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const authAtom = atom({
  key: AUTH_ATOM,
  default: {
    isLogged: false,
    accessToken: null,
    user: null,
  },
  effects: [localStorageEffect("auth")],
});
