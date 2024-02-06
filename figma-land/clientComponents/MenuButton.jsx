"use client";

import { navbarAction } from "@/Redux/slice/navbarSlice";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
const MenuButton = () => {
  const { isOpened } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  return (
    <BiMenuAltRight
      onClick={() => dispatch(navbarAction.setIsOpened(!isOpened))}
      className="text-[30px] text-white min-[700px]:hidden cursor-pointer"
    />
  );
};

export default MenuButton;
