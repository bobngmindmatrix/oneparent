// noinspection JSAnnotator

import { forwardRef, memo, useMemo, useState } from "react";
import { MdError, MdPin } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import clsx from "clsx";

const Input = forwardRef(
  (
    {
      label,
      value,
      showError = true,
      helper,
      className,
      labelClassName = ``,
      error,
      inputClassName,
      disabled = false,
      preview,
      leftIcon = false,
      renderLeftIcon = null,
      rightIcon = false,
      renderRightIcon = null,
      containerClass = ``,
      onBlur,
      onFocus,
      ...rest
    },
    ref
  ) => {
    const [isFocusing, setIsFocusing] = useState(false);

    const iconColor = useMemo(() => {
      if (!!error && showError) return `var(--red-3)`;
      if (disabled) return `var(--grey-5)`;
      else if (isFocusing) return `var(--primary-5)`;
      else return `var(--grey-5)`;
    }, [isFocusing, disabled, error, showError]);

    return (
      <div className={clsx(`flex flex-col`, className)}>
        {label && (
          <label
            className={
              labelClassName !== ``
                ? labelClassName
                : `text-base font-medium mb-2`
            }
          >
            {label}
          </label>
        )}
        {preview ? (
          <p className="px-1 py-2">{value}</p>
        ) : (
          <div>
            <div
              className={`flex items-center transition-color duration-200 ease-linear border p-3 rounded-lg
              ${containerClass} ${
                disabled
                  ? `bg-[#f2f2f4]`
                  : `bg-white dark:bg-dark-primary-1 dark:border-dark-primary-2`
              } ${
                !!error && showError
                  ? `border-red-3`
                  : isFocusing && !disabled
                  ? `border-primary-5`
                  : ``
              }`}
            >
              {leftIcon &&
                (renderLeftIcon ? (
                  renderLeftIcon()
                ) : (
                  <MdPin color={iconColor} />
                ))}
              <input
                onFocus={(e) => {
                  onFocus?.(e);
                  setIsFocusing(true);
                }}
                onBlur={(e) => {
                  setIsFocusing(false);
                  onBlur?.(e);
                }}
                spellCheck={false}
                autoComplete="false"
                defaultValue={value}
                value={value}
                disabled={disabled}
                ref={ref}
                className={clsx(
                  `bg-white dark:bg-dark-primary-1 dark:text-white w-full text-base placeholder:text-grey-6 dark:placeholder:text-grey-4`,
                  { "ml-2": leftIcon, "mr-2": rightIcon },
                  inputClassName
                )}
                {...rest}
              />
              {rightIcon &&
                (renderRightIcon ? (
                  renderRightIcon()
                ) : (
                  <FaChevronDown className={`text-grey-5`} />
                ))}
            </div>
            <div className={"flex items-center"}>
              {showError && error?.message && (
                <div className="bg-red-100 mt-2 text-red-500 flex items-center rounded w-full py-1 px-2 ">
                  <div className={"shrink-0"}>
                    <MdError size={12} />
                  </div>
                  <p
                    className={`ml-1 font-medium text-red-500 text-sm leading-[20px]`}
                  >
                    {error?.message}
                  </p>
                </div>
              )}
              {helper && (
                <p className="w-full text-xs text-grey-700 mt-2">{helper}</p>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = `Input`;

export default memo(Input);
