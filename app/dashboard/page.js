"use client"
import React, { useState } from "react";
import Sidebar from "@/components/dashboard/SideBar";
import NavBar from "@/components/dashboard/NavBar";
import MainUperPart from "@/components/dashboard/MainUperPart";
import AreaChart from "@/components/dashboard/AreaChart";
import BarChart from "@/components/dashboard/BarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faShoppingCart, faWallet, faWrench } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const name = "Elkovi's Restaurant";
  return (
    <>
      <div className="flex bg-backColor h-screen w-screen overflow-x-hidden">
        <Sidebar height="h-[190%]"/>
        <div className="flex flex-col flex-grow">
          <NavBar page={"Dashboard"} />
              <div className="px-10 text-white text-4xl font-bold bg">{name}</div>
              <MainUperPart className="px-10" />
              <div className="w-full h-full flex pl-10 gap-2">
                <div className="flex flex-col w-[60%] h-auto bg-sideBarcol rounded-lg p-2 z-10 relative">
                  <BarChart />
                  {/* BarChart Info */}
                  <div className="text-sm flex flex-col gap-2 pl-2">
                    <div className="flex flex-col gap-1">
                      <div className="font-bold text-white text-sm">Active Users</div>
                      <div className="flex font-semibold gap-2">
                        <div className="text-green">{"(+23)"}</div>
                        <div className="text-[#A0AEC0]">then last hour</div>
                      </div>
                    </div>
                    <div className="w-full flex gap-6 justify-center items-center">
                      <States icon={faWallet} about="Users" number="32,948" percent={55} />
                      <States icon={faRocket} about="Clicks" number="2,4m" percent={40} />
                      <States icon={faShoppingCart} about="Sales" number="2400$" percent={50} />
                      <States icon={faWrench} about="Items" number="320" percent={40} />
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="w-[90%] h-auto bg-sideBarcol rounded-lg p-4 z-10 relative">
                  <div className="text-lg font-semibold text-white">Sales Overview</div>
                  <div className="flex text-sm gap-2">
                    <div className="text-green">{"(+5) more"}</div>
                    <div className="text-[#a0aec0]">in 2021</div>
                  </div>
                  <AreaChart />
                </div>
              </div>
              <div className="w-full flex items-center gap-2  pl-10 py-5">
                <div className="text-white font-light text-sm">Powered by</div>
                <div className="w-24">
                  <img src="smatik_logo.png" alt="Smatik Logo" />
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

const States = ({ icon, about, number, percent }) => {
  return (
    <div className="flex flex-col gap-3 w-1/4">
      <div className="flex gap-2 items-center">
        <div className="flex rounded-lg p-1 justify-center items-center bg-[#0075FF] text-white">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="text-[#A0AEC0] font-semibold text-sm">{about}</div>
      </div>
      <div className="font-bold text-white text-sm">{number}</div>
      <div className="flex w-full h-[3px] bg-[#A0AEC0] items-center rounded-lg">
        <div className={`bg-[#0075FF] rounded-lg w-[${percent}%] h-[3px]`}></div>
      </div>
    </div>
  );
};

export default Dashboard;
