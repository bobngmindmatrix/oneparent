import React from "react";
import { useRecoilValue } from "recoil";
import { authAtom } from "@/store/atoms/authAtom";

const Avatar = ({ user }) => {
  const auth = useRecoilValue(authAtom);
  let actualUser = user || auth?.user;

  // Extract the first character of the name
  const initial = actualUser?.fullname
    ? actualUser?.fullname[0].toUpperCase()
    : "";

  return (
    <div className="bg-gray-700 text-white rounded-full w-8 h-8 flex justify-center items-center text-sm font-medium">
      {initial}
    </div>
  );
};

export default Avatar;
