import React from 'react';
import { faBars, faBell, faGear, faMagnifyingGlass, faRotateLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  return (

      <div className="flex-col w-[72rem] h-[7rem] mt-[1rem]">
        {/* top */}
        <div className="flex text-white w-full h-[40px] pl-[2.5rem]">
          <div className="font-[400] text-[13px]">Pages</div>
          <div className="font-bold text-[12px]"> /  Arbeit’s Space
        </div>
          {/* Bars */}
          <div className="self-center mx-3 text-[1rem]">
            <FontAwesomeIcon icon={faBars} />
          </div>

          {/* place Navbar icons in this div */}
          <div className="flex gap-[30px] flex-row-reverse w-[84%] h-auto text-white text-[13px] pr-5">

            <div className="flex gap-3   w-[1.4rem] h-[1rem] text-[#718096] self-center justify-center items-center pr-[1.5rem]">
              <FontAwesomeIcon icon={faBell} />
              <FontAwesomeIcon icon={faGear} width={40} />
            </div>

            <div className="flex gap-2 select-none text-[#718096]  justify-center items-center ">
              <FontAwesomeIcon icon={faUser} />
              <div>Sign In</div>
            </div>

            {/* search bar */}
            <div className='flex gap-2 self-center justify-start items-center w-[20%] h-[2rem] rounded-2xl p-2 bg-[#0f1535] border-[1px] border-white text-[#718096]'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <form>
                <input type="text" placeholder="Search..." style={{ backgroundColor: '#0f1535', color: 'white', border: 'none', outline: 'none', width: '100%' }} />
              </form>
            </div>

            {/* flag */}
            <div className="flex w-[4.5%] h-auto rounded-[12px] self-center p-2 border-2 ">
              <img src="./png/flag.png" alt="Flag" />
            </div>
          </div>
        </div>

        {/* middle */}
        <div className="text-white w-[20%] h-auto font-bold pl-[2.5rem] text-[14px]">
          Dashboard
        </div>

        {/* end */}
        <div className="flex flex-col w-full h-[110px] pl-[2.5rem]">
          <div className="flex text-white  gap-5">
            <div className='font-[700] text-[1.5rem]'>Restaurantname</div>
          </div>
        </div>
      </div>
  );
}

export default NavBar;
