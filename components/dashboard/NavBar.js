<<<<<<< Updated upstream
import { faBars, faBell, faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

function NavBar({ page }) {
  return (
    <div className="w-full flex px-10 py-4 text-white items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        <div className="flex">
          <div className="text-gray-500">Pages&nbsp;</div>
          <div className="font-bold">/&nbsp;{page}</div>
        </div>
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="flex items-center justify-center gap-6 text-gray-500">
        <div className="flex items-center justify-end gap-2 ">
          <Image src={"/png/flag.png"}  height={42} width={42} className="border-gray-500 border rounded-xl  p-3 object-cover"/>
          <form className="w-3/5 flex text-sm border border-gray-500 rounded-xl px-4  justify-center items-center gap-4 placeholder:text-gray-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              className="w-full bg-backColor text-white font-bold placeholder:font-normal outline-none py-2"
              placeholder="Type here..."
            />
          </form>
        </div>
        <Image src="/elon.jpg" height={24} width={24} className="w-10 h-10 rounded-full border p-2 border-blue-400 object-cover" />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faGear} />
      </div>
    </div>
  );
}

export default NavBar;
=======
import React from 'react'

function NavBar(props) {
  return (
    <div className='w-screen h-auto bg-[red] flex'>
        <div>pages</div>
        <div>{props.page}</div>
    </div>
  )
}

export default NavBar
>>>>>>> Stashed changes
