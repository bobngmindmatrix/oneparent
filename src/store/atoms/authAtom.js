"use client";

import { atom } from "recoil";
import { AUTH_ATOM } from "@/constants/AtomKeys";
import { setDefaultHeaders } from "@/utils/axios";

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    if (typeof window !== "undefined") {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        const persistData = JSON.parse(savedValue);
        setSelf(persistData);
        setDefaultHeaders({
          Authorization: `Bearer ${persistData?.accessToken}`,
        });
      }

      onSet((newValue, _, isReset) => {
        const accessToken = newValue.accessToken;
        setDefaultHeaders({ Authorization: `Bearer ${accessToken}` });
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const buildAuthAtom = (isLogged, accessToken, user) => {
  return {
    isLogged,
    accessToken,
    user,
  };
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
