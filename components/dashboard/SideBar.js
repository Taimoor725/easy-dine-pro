"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileLines, faShoppingCart, faHouse, faWrench, faAngleDoubleDown, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Dashboard from "@/app/dashboard/page";

const Sidebar=({height})=>{
  const maxheight=height;
  const router = useRouter();
  const liveuser = 0;

  const[Dashboard,setDashboard]=useState(true);

  const authenticationPages = (key) => {
    return key === "AUTHEN1" ? router.push("/signin/signin") : router.push("/login/");
  };


  const HOMEhandler=(key)=>{
    key==="HOME3"?router.push("/bill/"):console.log("ABC")
  }

  const dashboard = () => {
    return router.push("/dashboard/");
  };

  const home = () => {
    return router.push("/home/");
  };

  const editproduct = () => {
    return router.push("/editproduct/");
  };

  const CRM=(key)=>{
    key==="HOME2" ? router.push("/bill"):router.push("/dashboard/")
  }

  return (
    <div className="h-auto min-w-[16%] z-10">
      <div className={`w-full ${maxheight} bg-sideBarcol flex flex-col items-center text-white gap-4`}>
        <div className="flex flex-col items-center gap-5">
          <div className="w-32 h-24 object-cover">
            <Image src="/png/pic_1.png" width={128} height={96} />
          </div>
          <div className="w-4/5 h-[0.5px] bg-gray-400 rounded-sm"></div>
          <div className="font-bold text-sm">Kunden-Nr. 44156413</div>
          <div className="flex flex-col items-center text-sm">
            <div className="font-bold">Unternehmen</div>
            <div className="font-light text-sm">Advance Kontingent</div>
          </div>

          <div className="font-light">{liveuser} Online</div>
          <div className="font-bold text-sm">{"> Mehr EasyDine kaufen"}</div>
        </div>

        <div className="w-full flex justify-center items-center flex-col gap-4">
          <div></div>
          <TabButton name={"Dashboard"} icon={faHouse} list={{ HOME1: "DEFAULT" ,HOME2:"CRM" }} onClick={(key) => CRM(key)}/>
          <TabButton name={"Arbeit’s Space"} icon={faFile} onClick={home} />
          <TabButton name={"EasyDine"} icon={faWrench} onClick={editproduct} />
          <TabButton name={"Apps"} icon={faShoppingCart} list={{ HOME1: "Calender", HOME2: "Kontakte",HOME3:"Rechnungen", HOME4:"Produkte",HOME5:"Reservation",HOME6:"Lagersystem",HOME7:"Support",HOME8:"QR Code" }} onClick={(key) => HOMEhandler(key)} />
          <TabButton name={"Managment"} icon={faFile} />
          <TabButton name={"Authentication"} icon={faFileLines} list={{ AUTHEN1: "SignIn", AUTHEN2: "LogIn" }} onClick={(key) => authenticationPages(key)} />
        </div>
      </div>
    </div>
  );
}
export default Sidebar;


const TabButton = ({ name, icon, list, onClick, ...props }) => {
  const [active, setActive] = useState(false);
  const[col,setCol]=useState("bg-brgray");
  const[IconCol,setIconCol]=useState("text-brBlue");
  const[BorderCol,SetBorderCol]=useState("border-sideBarcol");
  const [BackGroundCol,setBackGroundCol]=useState(null);
  const [ArrowIcon,setArrowIcon]=useState(faAngleDown)
  const press=()=>{
      col==="bg-brgray"? setCol("bg-brBlue"):setCol("bg-brgray")
      IconCol==="text-brBlue"? setIconCol("text-white"):setIconCol("text-brBlue")
      BorderCol==="border-sideBarcol"? SetBorderCol("border-white"):SetBorderCol("border-sideBarcol");
      BackGroundCol===null?setBackGroundCol("bg-backColor"):setBackGroundCol(null)
      ArrowIcon===faAngleDown?setArrowIcon(faAngleUp):setArrowIcon(faAngleDown)

  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center" onClick={() => setActive(!active)}>
      <div className={`button flex w-5/6 h-10 bg- rounded-md justify-center items-center p-1 px-2 gap-2 cursor-pointer ${BorderCol} ${BackGroundCol}  border-[1px] hover:border-white hover:bg-backColor`} {...props} onClick={press}>
        <div className={`flex w-1/6 h-3/4 ${col} ${IconCol} justify-center items-center rounded-lg text-sm `}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="flex-grow text-sm">{name}</div>
        <div>
          <FontAwesomeIcon icon={ArrowIcon}/>
        </div>
      </div>
      {active && (
        <ul className="w-4/6 h-auto flex flex-col gap-1 mt-1">
          {Object.entries(list).map(([key, value]) => (
            <li key={key} className="flex items-center gap-4 w-auto rounded-lg text-xs p-1 hover:bg-[#0F1535]" onClick={() => onClick(key)}>
              <div className="rounded-full w-2 h-2 bg-blue-600 "></div>
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

 

