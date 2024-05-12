import clsx from "clsx";
import React, { MouseEventHandler } from "react";
import { FC } from "react";

interface ButtonPropsType {
  type: "primary" | "secondary" | "transparent";
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

const Button: FC<ButtonPropsType> = (props) => {
  const { type, className, onClick, text } = props;
  return (
    <button
      className={clsx([
        "py-4 font-medium text-base rounded",
        type === "primary" && "bg-white text-black",
        type === "transparent" &&
          "bg-transparent text-white border border-white border-solid",
        type === "secondary" && "bg-[#0055A6] text-white",
        className,
      ])}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
