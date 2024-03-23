import React, { DOMAttributes } from "react";

type Button = {
  children?: React.ReactNode;
  type: number;
  className?: string;
  primaryBg: string;
  secondaryBg: string;
  onClick?: any;
};

export default function Button({
  children,
  type,
  className,
  primaryBg,
  secondaryBg,
  onClick,
}: Button) {
  return (
    <>
      {type == 1 && (
        <button
          className={`block ${primaryBg} px-5 py-2 relative ${className}`}
          onClick={onClick}
        >
          <div>{children}</div>
          <div
            className={`absolute ${secondaryBg} top-0 left-0 w-1/6 h-1/2 -translate-x-[2px] -translate-y-[2px] -z-10`}
          ></div>
          <div
            className={`absolute ${secondaryBg} top-0 right-0 w-1/6 h-1/2 translate-x-[2px] -translate-y-[2px] -z-10`}
          ></div>
          <div
            className={`absolute ${secondaryBg} bottom-0 right-0 w-1/6 h-1/2 translate-x-[2px] translate-y-[2px] -z-10`}
          ></div>
          <div
            className={`absolute ${secondaryBg} bottom-0 left-0 w-1/6 h-1/2 -translate-x-[2px] translate-y-[2px] -z-10`}
          ></div>
        </button>
      )}
      {type == 2 && (
        <button
          className={`block ${primaryBg} px-5 py-2 relative ${className}`}
          onClick={onClick}
        >
          <div>{children}</div>
          <div
            className={`absolute top-0 left-0 w-full h-1/2 -translate-y-[3px] -z-10`}
          >
            <div className={`${secondaryBg} w-[95%] h-full mx-auto`}></div>
          </div>
          <div
            className={`absolute bottom-0 left-0 w-full h-1/2 translate-y-[3px] -z-10`}
          >
            <div className={`${secondaryBg} w-[95%] h-full mx-auto`}></div>
          </div>
        </button>
      )}
      {type == 3 && (
        <button
          className={`block ${primaryBg} px-5 py-2 relative ${className}`}
          onClick={onClick}
        >
          <div>{children}</div>
          <div
            className={`absolute ${secondaryBg} top-0 left-0 w-1/6 h-1/2 translate-x-2 -translate-y-[3px] -z-10`}
          ></div>
          <div
            className={`absolute ${secondaryBg} top-0 right-0 w-1/6 h-1/2 -translate-x-2 -translate-y-[3px] -z-10`}
          ></div>
          <div
            className={`absolute ${secondaryBg} bottom-0 right-0 w-1/6 h-1/2 -translate-x-2 translate-y-[3px] -z-10`}
          ></div>
          <div
            className={`absolute ${secondaryBg} bottom-0 left-0 w-1/6 h-1/2 translate-x-2 translate-y-[3px] -z-10`}
          ></div>
        </button>
      )}
    </>
  );
}
