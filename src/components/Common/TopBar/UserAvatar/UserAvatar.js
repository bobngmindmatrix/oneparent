import Avatar from "@/components/Avatar";
import { Button } from "@/components";

import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
const UserAvatar = ({}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Button
      id={"user-avatar-button"}
      transparent
      onClick={handleClick}
      aria-controls={open ? "user-avatar-button" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
    >
      <Avatar />
      <Menu
        id="user-avatar-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "user-avatar-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        style={{ shadow: null }}
      >
        <MenuItem onClick={() => console.log("Hi")}>Profile</MenuItem>
        <MenuItem onClick={() => router.replace("/logout")}>Logout</MenuItem>
      </Menu>
    </Button>
  );
};
export default UserAvatar;
