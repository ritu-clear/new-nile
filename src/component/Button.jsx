import React from 'react'
import Link from "next/link";

const Button = ({ type , text, href }) => {

  const buttonTypes = {
    primary:
        " text-base text-lg font-bold !leading-tight epilogue inline-block ",
    "primary-pink-transparent":
        " text-base text-lg font-bold !leading-tight inline-block epilogue bg-[#ff0092] text-[white] whitespace-nowrap border-2  py-5 px-8 rounded-[10px] ",
    "primary-transparent":
        "text-base text-lg font-bold !leading-tight  inline-block epilogue bg-transparent text-white whitespace-nowrap border-2 border-white  py-5 px-8 rounded-[10px]",
    secondary:
        "text-base text-lg font-bold text-black inline-block !leading-tight epilogue pr-9 ",
    "secondary-white":
        "text-base text-lg font-bold text-white inline-block !leading-tight epilogue pr-9 "
};
const arrowTypes = {

}
  return (
   
    <Link className={`${buttonTypes[type]} group relative`} href={href}>
  {text}
  <span
    className={`rotate-[-45deg] absolute right-2 top-4 transition-transform duration-300 scale-90 group-hover:rotate-[0deg] top-[21px] ${
      type === "primary-pink-transparent" || type === "primary-transparent"
        ? "text-white"
        : "text-black"
    }`}
  >
    ➝
  </span>
</Link>
  )
}

export default Button
