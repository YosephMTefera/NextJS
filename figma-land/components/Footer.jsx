import React from "react";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-[100%] p-2 min-h-[300px] bg-[#252B42]">
      <div className="w-[60%] my-[50px] mx-auto flex justify-between items-center max-[1200px]:w-[80%] max-[750px]:flex-col max-[750px]:items-start max-[750px]:gap-[30px]">
        <div>
          <div>
            <span className="text-white font-bold">Pages</span>
          </div>
          <div className="flex flex-col gap-[10px] my-[10px] text-[12px] text-gray-400">
            <Link href="/">
              <span>Home</span>
            </Link>
            <Link href="/">
              <span>Product</span>
            </Link>
            <Link href="/">
              <span>Pricing</span>
            </Link>
            <Link href="/">
              <span>About</span>
            </Link>
            <Link href="/">
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span className="text-white font-bold">Tomothy</span>
          </div>
          <div className="flex flex-col gap-[10px] my-[10px] text-[12px] text-gray-400">
            <Link href="/">
              <span>Eleanor Edwards</span>
            </Link>
            <Link href="/">
              <span>Ted Robertson</span>
            </Link>
            <Link href="/">
              <span>Annette Russell</span>
            </Link>
            <Link href="/">
              <span>Jenie Mckinney</span>
            </Link>
            <Link href="/">
              <span>Gloria Richards</span>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <span className="text-white font-bold">Jane Black</span>
          </div>
          <div className="flex flex-col gap-[10px] my-[10px] text-[12px] text-gray-400">
            <Link href="/">
              <span>philip Jones</span>
            </Link>
            <Link href="/">
              <span>Product</span>
            </Link>
            <Link href="/">
              <span>Collean Russell</span>
            </Link>
            <Link href="/">
              <span>Marvin Hawkins</span>
            </Link>
            <Link href="/">
              <span>Bruce Simmmons</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] max-[750px]:my-[30px]">
          <div className="flex items-center gap-[10px]">
            <IoLocationOutline className="text-[20px] text-white" />
            <span className="text-gray-400 text-[12px]">
              7480 Mockingbird Hill undefined{" "}
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <MdPhoneAndroid className="text-[20px] text-white" />
            <span className="text-[12px] text-gray-400">(239) 555-0108</span>
          </div>
          <div className="flex items-center text-[20px] text-white gap-[20px]">
            <FaTwitter />
            <FaSquareFacebook />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
