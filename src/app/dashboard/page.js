"use client";
import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { AUTH_ATOM } from "@/store/atoms/keys";
import { authAtom } from "@/store/atoms/authAtom";
import ResponsiveModal from "@/components/Modal/ResponsiveModal";
const Dashboard = ({}) => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const [openModal, setOpenModal] = useState(false);

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
      <button onClick={() => setOpenModal(true)}>Open modal</button>
      <ResponsiveModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        withHeader
      >
        <div>This is the modal</div>
      </ResponsiveModal>
    </div>
  );
};
export default Dashboard;
