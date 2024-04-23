// noinspection JSAnnotator

import React from "react";
import clsx from "clsx";
import Link from "next/link";
const SideMenuItem = ({ active = false, label, url }) => {
  return (
    <Link
      className={clsx(
        `flex px-4 py-3 font-medium rounded-lg hover:bg-blue-100`,
        {
          "bg-blue-500 text-white": active,
        }
      )}
      href={url}
    >
      {label}
    </Link>
  );
};
export default SideMenuItem;
