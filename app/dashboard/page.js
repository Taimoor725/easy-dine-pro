"use client";
import React, { useEffect, useRef, useState } from "react";
import Sidebar from "@/components/dashboard/SideBar";
import NavBar from "@/components/dashboard/NavBar";
import MainUperPart from "@/components/dashboard/MainUperPart";
import gsap from "gsap";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const name = "Elkovi's Restraunt"
  return (
    <>
      <div className="flex bg-backColor h-screen w-screen  overflow-x-hidden">
        {sidebarOpen && <Sidebar className="" state={sidebarOpen} />}
        <div className="flex flex-col flex-grow">
          <NavBar page={"Dashboard"} callback={setSidebarOpen} />
          <div className="px-10 text-white text-4xl font-bold mt-4">{name}</div>
          <MainUperPart className="p-10" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
