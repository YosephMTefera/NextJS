"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
// import { BiMenuAltRight } from "react-icons/bi";
// import ResponsiveNavbar from "./ResponsiveNavbar";
import MenuButton from "@/clientComponents/MenuButton";

const Navbar = () => {
  const [navBarOpended, setNavbarOpened] = useState(false);
  return (
    <>
      <div className="w-[70%] mx-auto min-h-[100px] flex justify-between items-center max-[900px]:w-[90%]">
        <div className="text-gray-300 flex gap-[20px] items-center text-[14px] max-[700px]:hidden">
          <Link href={"/"}>
            <span>Home</span>
          </Link>
          <Link href={"/"}>
            <span>Product</span>
          </Link>
          <Link href={"/"}>
            <span>About</span>
          </Link>
          <Link href={"/"}>
            <span>Contact</span>
          </Link>
        </div>
        <div>
          <Image src={"/dark.png"} width={150} height={150} />
        </div>
        <div className="flex items-center text-[20px] text-white gap-[20px] max-[700px]:hidden">
          <FaTwitter />
          <FaSquareFacebook />
          <FaLinkedin />
        </div>

        <MenuButton />
        {/* <BiMenuAltRight
          onClick={() => setNavbarOpened(!navBarOpended)}
          className="text-[30px] text-white min-[700px]:hidden cursor-pointer"
        /> */}
      </div>
      {/* {navBarOpended && <ResponsiveNavbar />} */}
    </>
  );
};

export default Navbar;
