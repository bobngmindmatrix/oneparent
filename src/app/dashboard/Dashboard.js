"use client";
import React, { useState } from "react";
import ResponsiveModal from "../../components/Modal/ResponsiveModal";
const Dashboard = ({}) => {
  const [openModal, setOpenModal] = useState(false);
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
