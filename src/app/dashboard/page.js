"use client";
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AUTH_ATOM } from "@/store/atoms/keys";
import { authAtom } from "@/store/atoms/authAtom";
const Dashboard = ({}) => {
  const [auth, setAuth] = useRecoilState(authAtom);

  useEffect(() => {
    setAuth({
      isLogged: true,
      accessToken: "1234",
      user: {
        id: 1,
        name: "Bob Nguyen",
      },
    });
  }, []);
  return (
    <div className={`flex w-screen h-screen items-center justify-center`}>
      Dashboard
    </div>
  );
};
export default Dashboard;
