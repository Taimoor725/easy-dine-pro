"use client";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCartShopping, faFile, faHouse, faWrench, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import gsap from "gsap";

export default function Sidebar({ state, ...props }) {
  const router = useRouter();
  const sidebarRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(sidebarRef.current, {
      width: "16.66%",
      duration: 0.5,
    });
  }, []);
  return (
    <div className="h-screen" ref={sidebarRef} {...props}>
      <div className="w-full h-full bg-red-700"></div>
    </div>
  );
}
