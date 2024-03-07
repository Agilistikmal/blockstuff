import { JSX, SVGProps } from "react";

export default function MoneyIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      {" "}
      <path
        d="M16 4H2v12h4v4h16V8h-4V4h-2zm0 2v2H6v6H4V6h12zm-8 4h12v8H8v-8zm8 2h-4v4h4v-4z"
        fill="currentColor"
      />{" "}
    </svg>
  );
}
