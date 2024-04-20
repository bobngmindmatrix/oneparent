import React, { forwardRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "@/store/atoms/authAtom";
import { showLoginAtom } from "@/store/atoms/showLoginModal";
const Button = forwardRef(
  (
    {
      type = "button",
      className = "",
      disabled = false,
      transparent,
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
      // if (type === "submit") return;
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
      if (disabled) return "!bg-gray-4 border !border-gray-4 cursor-auto";
      switch (type) {
        case "primary":
          return "btn-primary";
        case "secondary":
          return "btn-secondary";
        case "danger":
          return "btn-danger";
      }
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${buttonTypeCss()} ${className || ``} group`}
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
