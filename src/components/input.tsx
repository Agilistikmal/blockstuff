import SearchIcon from "@/icons/search";
import { JSX, ClassAttributes, InputHTMLAttributes } from "react";

export default function Input(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <>
      <div className="group flex w-full items-center bg-white border-4">
        <div className="flex-grow">
          <label htmlFor={props.id} className="font-bold">
            {props.name}
          </label>
          <input
            className="w-full h-full p-5 text-black outline-none bg-transparent"
            {...props}
          />
        </div>
        <div className="px-5">
          <SearchIcon className="w-6 text-black" />
        </div>
      </div>
    </>
  );
}
