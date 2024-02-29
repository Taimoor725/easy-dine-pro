"use client";
import { faBell, faFile, faGlobe, faShoppingCart, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Earth from "./Earth";

function MainUperPart(props) {
  const data = [
    { title: "Net profit", amount: "$53,000", growth: "55", icon: faWallet },
    { title: "New Clients", amount: "+3,052", growth: "-14", icon: faFile },
    { title: "Today's User", amount: "2,300", growth: "8", icon: faGlobe },
    { title: "Net profit", amount: "$4000", growth: "5", icon: faShoppingCart },
  ];
  return (
    <div className="w-[84%] h-full " {...props}>
      <div className="flex w-full h-full gap-2">
        <div className="w-3/5 h-full flex flex-col gap-4">
          <div className="grid grid-cols-2 grid-rows-2 h-1/4 gap-4">
            {data.map((value, i) => {
              return <Card {...value} />;
            })}
          </div>
          <TimelineCard />
        </div>
        <div className="w-2/5 h-full bg-black">
          {/* <Earth/> */}
        </div>
      </div>
    </div>
  );
}

export default MainUperPart;

const Card = ({ icon, title, amount, growth }) => {
  return (
    <div className="w-full h-full bg-sideBarcol rounded-2xl flex p-4 border-sideBarcol border-[1px] hover:bg-backColor hover:border-white ">
      <div className=" flex-grow flex flex-col items-start justify-center gap-1">
        <div className="text-sm text-gray-300 font-semibold capitalize">{title}</div>
        <div className="flex items-end gap-2">
          <div className="text-white font-bold text-xl">{amount}</div>
          <div className={`${growth > 0 ? "text-[green]":"text-[red]"} text-sm font-bold`}>
            {growth > 0 ? "+" : ""}
            {growth}%
          </div>
        </div>
      </div>
      <div className="text-white flex items-center justify-center bg-btncol p-3 rounded-xl text-xl">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};
const TimelineCard = () => {
  const data = [
    {
      title: "$2400, Design changes",
      time: "14 FEB 11:26 PM",
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      actions: ["DESIGN"],
    },
    {
      title: "New Order #696969",
      time: "20 AUG 11:26 AM",
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      actions: ["ORDER", "#696969"],
    },
  ];
  return (
    <div className="w-2/3 h-2/3  ">
      <div className="bg-sideBarcol w-full h-full rounded-2xl p-4 flex flex-col gap-4">
        <div className="font-bold text-white text-xl ml-2">Timeline with dotted line</div>
        <div className="flex flex-col gap-4">
          {data.map((value, i) => {
            return <TimeCard {...value} />;
          })}
        </div>
      </div>
    </div>
  );
};
const TimeCard = ({ title, time, description, actions }) => {
  return (
    <div className="flex">
      <div className="w-10 flex flex-col items-center justify-start gap-2 text-blue-500 pt-1">
        <FontAwesomeIcon icon={faBell} />
        <div className="flex-grow w-1 bg-gray-500 rounded-2xl" />
      </div>
      <div className="w-full h-auto flex flex-col text-white flex-grow">
        <div className="font-semibold">{title}</div>
        <div className="font-bold text-gray-500 text-xs">{time}</div>
        <div className="text-gray-500 text-sm font-semibold mt-2">{description}</div>
        <div className="flex gap-4 items-center justify-start">
          {actions.map((value, i) => {
            return <button className="bg-red-600 mt-2 p-2 rounded-xl font-bold text-white px-4 text-sm">{value}</button>;
          })}
        </div>
      </div>
    </div>
  );
};
