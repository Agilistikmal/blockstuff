import React from "react";

type Button = {
  children?: React.ReactNode;
  type: number;
  className?: string;
  primaryBg: string;
  secondaryBg: string;
};

export default function Button({
  children,
  type,
  className,
  primaryBg,
  secondaryBg,
}: Button) {
  return (
    <>
      {type == 1 && (
        <button className={`block ${primaryBg} px-5 py-2 relative`}>
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
    </>
  );
}
