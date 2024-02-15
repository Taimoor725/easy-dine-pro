"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileLines, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ state, ...props }) {
  const router = useRouter();

  const liveuser=0;
  const sidebarRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(sidebarRef.current, {
      width: "30%",
      duration: 0.5,
    });
  }, []);
  return (
    <div className=" h-full" ref={sidebarRef} {...props}>
      <div className="w-full h-full bg-sideBarcol  flex flex-col items-center text-white gap-4">
        <div className="flex flex-col items-center gap-5">
            <div className="w-32 h-24 object-cover"><Image src="/png/pic_1.png" width={128} height={96}/></div>
            <div className="w-4/5 h-[0.5px] bg-gray-400 rounded-sm"></div>
            <div className="font-bold text-sm">Kunden-Nr. 44156413</div>
            <div className="flex flex-col items-center text-sm">
                <div className="font-bold">Unternehmen</div>
                <div className="font-light text-sm">Advance Kontingent</div>
            </div>

            <div className="font-light">{liveuser} Online</div>
            <div className="font-bold text-sm">{`> Mehr EasyDine kaufen`}</div>
          </div>

          <div className="w-full flex justify-center items-center flex-col gap-3">
              <TabButton name={'Arbeit’s Space'} icon={faFile}/>
              <TabButton name={'Apps'} icon={faShoppingCart}/>
              <TabButton name={'Managment'} icon={faFile}/>
              <TabButton name={'Authentication'} icon={faFileLines}/>
          </div>
      </div>
    </div>
  );
}


const TabButton=({name,icon})=>{
  return(
    <div className="flex w-5/6 h-10 bg- rounded-md justify-center items-center p-1 px-2 gap-2">
        <div className="flex w-1/6 h-3/4 bg-brgray text-brBlue justify-center items-center rounded-lg text-sm"><FontAwesomeIcon icon={icon}/></div>
        <div className="flex-grow text-sm">{name}</div>
    </div>
  )
}