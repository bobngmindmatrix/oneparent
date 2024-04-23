"use client";
import React, { useState } from "react";
import ResponsiveModal from "../../components/Modal/ResponsiveModal";
import { useGetHotCoffee } from "@/hooks/sample";
import { Loading } from "@/components";
const Dashboard = ({}) => {
  const [openModal, setOpenModal] = useState(false);
  const { isLoading: isGettingHotCoffee, data } = useGetHotCoffee();

  if (isGettingHotCoffee) return <Loading />;

  return (
    <div className={`flex w-full min-h-screen items-center justify-center`}>
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
