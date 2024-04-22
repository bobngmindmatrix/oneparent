import React, { forwardRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "@/store/atoms/authAtom";
import { showLoginAtom } from "@/store/atoms/showLoginModal";
const Button = forwardRef(
  (
    {
      type = "button",
      color = "primary",
      className = "",
      disabled = false,
      transparent = false,
      requireLogin,
      onClick,
      children,
      ...rest
    },
    ref
  ) => {
    const auth = useRecoilValue(authAtom);
    const setShowLogin = useSetRecoilState(showLoginAtom);
    const defaultOnClick = () => {
      if (type === "submit") return;
      // toastDeveloping(addToast);
    };
    const handleClick = (e) => {
      e.stopPropagation();
      if (requireLogin && !auth?.isLogged) {
        setShowLogin(true);
        return;
      }
      if (typeof onClick === `function`) onClick?.(e);
      else defaultOnClick();
    };

    const buttonTypeCss = () => {
      if (transparent) return "";
      if (disabled) return "!bg-gray-400 border !border-gray-400 cursor-auto";
      switch (color) {
        case "primary":
          return "bg-blue-400 text-white rounded-lg";
        case "secondary":
          return "btn-secondary";
        case "danger":
          return "btn-danger";
        default:
          return "bg-blue-400 text-white rounded-lg";
      }
    };

    return (
      <button
        ref={ref}
        className={`${buttonTypeCss()} ${
          className || ``
        } group py-3 px-4 font-medium`}
        onClick={handleClick}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
