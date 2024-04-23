"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { authAtom, buildAuthAtom } from "@/store/atoms/authAtom";
import { useRouter } from "next/navigation";
const Logout = ({}) => {
  const router = useRouter();
  const [auth, setAuth] = useRecoilState(authAtom);
  setAuth(buildAuthAtom(false, null, null));
  router.replace("/login");
};
export default Logout;
