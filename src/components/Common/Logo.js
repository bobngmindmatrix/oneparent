import React from "react";
import Image from "next/image";
const Logo = ({ width = 300 }) => {
  return <Image width={width} height={0} src={"/images/logo.svg"} />;
};
export default Logo;
