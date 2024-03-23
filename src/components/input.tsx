import SearchIcon from "@/icons/search";
import { JSX, ClassAttributes, InputHTMLAttributes } from "react";

export default function Input(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> & { icon: any; title?: string }
) {
  return (
    <>
      <label htmlFor={props.id} className="font-bold">
        {props.title}
      </label>
      <div className="group flex w-full items-center bg-white border-4 border-platinum">
        <div className="flex-grow">
          <input
            className="w-full h-full p-5 text-black outline-none bg-transparent"
            {...props}
          />
        </div>
        <div className="px-5">{props.icon}</div>
      </div>
    </>
  );
}
