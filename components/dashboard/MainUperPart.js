<<<<<<< Updated upstream
"use client";
import { faBell, faFile, faGlobe, faShoppingCart, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Earth from "./Earth";
=======
"use client"
import { faBell, faCartShopping, faFile, faGlobe, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'

function MainUperPart() {
    return (
        <div>
            <div className='flex pl-[2.5rem]'>
                <div className="flex flex-col w-full h-auto">
                    <div className="flex w-full h-auto gap-[1rem]">

                        {/* main section upers halfs left part */}
                        <div className="flex flex-col h-full w-[60%] gap-5">
                            {/* Main section left side of uper half */}
                            <div className="flex flex-col w-full h-[22%] gap-2 justify-center">
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center w-[50%] h-[3.5rem] bg-[#050B2B] rounded-[20px]">
                                        <MyComponent content={'Totale Orders'} calculatedAmount={'$53000'} statics={'+55'} icon={faWallet} />
                                    </div>
                                    <div className="flex justify-center items-center w-[50%] h-[3.5rem] bg-[#050B2B] rounded-[20px]">
                                        <MyComponent content={'New Clients'} calculatedAmount={'+3,052'} statics={'-14'} icon={faFile} />
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center w-1/2 h-[3.5rem] bg-[#050B2B] rounded-[20px]">
                                        <MyComponent content={'Today’s Users'} calculatedAmount={'2,300'} statics={'+5'} icon={faGlobe} />
                                    </div>
                                    <div className="flex justify-center items-center w-1/2 h-[3.5rem] bg-[#050B2B] rounded-[20px]">
                                        <MyComponent content={'Total Sales'} calculatedAmount={'$173,000'} statics={'+8'} icon={faCartShopping} />
                                    </div>
                                </div>
                            </div>
                            {/* Main Sections lower left side of uper half */}

                            <div className="flex gap-2">
                                <div className="flex w-[65%] h-[90%] bg-[#050B2B] gap-3 rounded-[20px]">
                                    <div className="flex flex-col w-full h-full rounded-[20px] text-white pl-[12px]">
                                        <div className="flex items-center font-[700] text-[13px] w-[224px] h-[30px] ">Timeline with dotted line</div>
                                        <div className="flex w-[493px] h-[170px] gap-3">
                                            <div className="flex flex-col text-[blue] items-start justify-start gap-2 text-[13px]">
                                                <FontAwesomeIcon icon={faBell} />
                                                <div className="pl-1"><svg width="3" height="115" viewBox="0 0 3 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="1.26221" y1="1.80176" x2="1.2622" y2="113.619" stroke="#2D2E5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col h-full w-full gap-1">
                                                    <div>
                                                        <p className="font-[700] text-[14px]">$2400, Design changes</p>
                                                        <p className="font-[500] text-[12px]">22 DEC 7:20 PM</p>
                                                    </div>
                                                    <p className="font-[400] text-[12px] w-[60%] ">People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.</p>
                                                    <button className="flex w-[100px] h-[38px] rounded-[15px] bg-[#0271F3] text-white justify-center items-center">
                                                        <p className="font-[700] text-[12px]">Design</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex w-[493px] h-[170px] gap-3 bg-black">
                                            <div className="flex flex-col text-[blue] items-start justify-start gap-2">
                                                <div><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.183105 0.463867L1.09544 10.7079L5.18194 11.8456L9.28043 10.7061L10.1928 0.463867H0.183105ZM7.76021 8.97221L5.18976 9.68611L2.62322 8.96866L2.44727 6.99311H3.70525L3.79466 7.99816L5.19159 8.38331L5.19497 8.39042L6.58877 8.01315L6.73578 6.38338H3.80639L3.70213 5.1131H6.84709L6.96048 3.81741H2.16418L2.05992 2.57253H8.33107L7.76021 8.97221Z" fill="#E31A1A" />
                                                </svg>
                                                </div>
                                                <div className="pl-1"><svg width="3" height="115" viewBox="0 0 3 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="1.26221" y1="1.80176" x2="1.2622" y2="113.619" stroke="#2D2E5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex flex-col h-full w-full gap-1">
                                                    <div>
                                                        <p className="font-[700] text-[14px]">New order #1832412</p>
                                                        <p className="font-[500] text-[12px]">21 DEC 11:01 PM</p>
                                                    </div>
                                                    <p className="font-[400] w-[17rem] text-[12px] h-auto">People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.</p>

                                                    <div className="flex gap-2">
                                                        <button className="flex w-[100px] h-[38px] rounded-[15px] bg-[#E31A1A] text-white justify-center items-center">
                                                            <p className="font-[700] text-[12px]">ORDER</p>
                                                        </button>

                                                        <button className="flex w-[100px] h-[38px] rounded-[15px] bg-[#E31A1A] text-white justify-center items-center">
                                                            <p className="font-[700] text-[12px]">#1832412</p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-center items-center w-full h-[90%] bg-[#050B2B] rounded-[20px] gap-6 text-white">
                                    <div><img src="./png/dashboard_1.png" className="w-[13rem] h-[10rem] rounded-[15px] object-none p-2" /></div>
                                    <div className="flex justify-center text-center font-[400] text-[13px] w-[150px]">Alles Restaurants EasyDine Club</div>
                                    <button className="flex justify-center items-center w-[177px] h-[37px] bg-[#0075FF] rounded-[15px]">Chose</button>
                                </div>
                            </div>
                        </div>

                        {/* main section upers halfs right part */}

                        <div><img src="./png/dashboard_2.png" className='w-full h-[90%]' /></div>
                    </div>
                </div>



            </div>
>>>>>>> Stashed changes

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
