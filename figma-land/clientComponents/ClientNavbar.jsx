"use client";

import React from "react";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import { useSelector } from "react-redux";
const ClientNavbar = () => {
  const { isOpened } = useSelector((state) => state.navbar);
  return isOpened && <ResponsiveNavbar />;
};

export default ClientNavbar;
