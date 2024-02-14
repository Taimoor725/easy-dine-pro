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
                                        <div className="flex w-[493px] h-[170px] gap-3">
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
                                                    <p className="font-[400] w-[17rem] text-[12px] bg-black h-auto">People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.</p>

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

        </div>
    )
}

export default MainUperPart



const MyComponent = ({ icon, content, calculatedAmount, statics }) => {
    const [col, setcol] = useState('text-[red]')
    useEffect(() => {
        statics > 0 ? setcol('text-[green]') : setcol('text-[red]');
    }, [statics]);

    return (
        <div className="flex w-[80%] h-[80%] text-white">
            <div className="flex flex-col w-auto h-auto">
                <p className="font-[400] text-[13px] w-[120px]">{content}</p>
                <div className="flex items-center gap-1">
                    <p className="font-[700] text-[14px]">{calculatedAmount}</p>
                    <p className={`font-[700] text-[10px] ${col}`}>{statics}%</p>
                </div>
            </div>
            <div className="flex justify-end w-[80%] h-full pt-1">
                <div className="w-[35%] h-[2rem] flex justify-center items-center bg-[#0271F3] text-[white] rounded-[12px]">
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
        </div>
    );
}