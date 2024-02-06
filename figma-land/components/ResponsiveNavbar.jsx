import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdContactPhone } from "react-icons/md";
const ResponsiveNavbar = () => {
  return (
    <div className="w-[50%] h-[100vh] fixed top-0 bg-[#252B42] shadow-xl min-[700px]:hidden">
      <div className="w-[80%] my-[30px] mx-auto flex flex-col">
        <div>
          <Image src={"/dark.png"} width={150} height={150} />
        </div>
        <div className="my-[30px]">
          <div className="text-white">
            <span>Navigations</span>
          </div>
          <div className="w-[80%] my-[30px] mx-auto">
            <div className="text-gray-300 flex flex-col gap-[20px]  text-[14px]">
              <Link href={"/"} className="flex items-center p-2 gap-[20px]">
                <FaHome className="text-[20px]" />
                <span>Home</span>
              </Link>
              <Link href={"/"} className="flex items-center p-2 gap-[20px]">
                <MdOutlineProductionQuantityLimits className="text-[20px]" />
                <span>Product</span>
              </Link>
              <Link
                href={"/"}
                className="flex items-center p-2 gap-[20px] text-gray-300"
              >
                <FcAbout className="text-[20px]" />
                <span>About</span>
              </Link>
              <Link href={"/"} className="flex items-center p-2 gap-[20px]">
                <MdContactPhone className="text-[20px]" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col  text-white gap-[20px]">
          <div className="text-white">
            <span>Social Media</span>
          </div>
          <Link href={"/"} className="flex items-center p-2 gap-[20px]">
            <FaTwitter className="text-[20px]" />
            <span className="text-[14px] text-gray-300">Twitter</span>
          </Link>
          <Link href={"/"} className="flex items-center p-2 gap-[20px]">
            <FaSquareFacebook className="text-[20px]" />
            <span className="text-[14px] text-gray-300">Facebook</span>
          </Link>
          <Link href={"/"} className="flex items-center p-2 gap-[20px]">
            <FaLinkedin className="text-[20px]" />
            <span className="text-[14px] text-gray-300">Linkedin</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
