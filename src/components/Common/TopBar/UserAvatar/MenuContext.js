import React from "react";
import { Menu, MenuItem } from "@mui/material";
const MenuContext = ({ open, onClose }) => {
  return (
    <Menu
      id="user-avatar-button"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "user-avatar-button",
      }}
    >
      <MenuItem onClick={() => console.log("Hi")}>Profile</MenuItem>
      <MenuItem onClick={() => console.log("Hi")}>My account</MenuItem>
      <MenuItem onClick={() => console.log("Hi")}>Logout</MenuItem>
    </Menu>
  );
};
export default MenuContext;
