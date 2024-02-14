import React from 'react'
import ToggleSwitch from './ToggelSwitch'
import MainLowerLeft from './MainLowerLeft'

function MainLower() {
    return (
        <div className="flex gap-3">
            <div className="flex flex-col gap-4">

                {/* Lower Part Left side 1st box */}
                <div className="flex flex-col w-[25rem] h-[8rem] bg-[#090F2A] rounded-[15px] pt-[5px] pl-[22px] items-stert gap-1 text-white">
                    <div className="font-[700] text-[15px]">Employees</div>
                    <div className=" flex items-center w-[95%] h-[4rem] rounded-[15px] bg-[#0F1535] pl-[15px]">
                        <div className="flex w-[90px] h-[27px] justify-center items-center bg-[#56577A] rounded-[15px]">
                            <p className="text-[13px] px-2 cursor-pointer">add People</p>
                        </div>
                    </div>
                </div>

                {/* Lower Part Left side 2st box */}
                <div className="w-[25rem] h-[19.5rem] bg-[#090F2A] rounded-[15px] flex pl-[0.5rem]">
                    <div className="flex pt-4">
                        <div className="font-[700] text-[0.8rem] w-[8rem] h-[1.5rem] ">Payment Method</div>

                        <div className="flex gap-1 items-start w-[11rem] h-[4rem]">
                            <div className='pt-[2px]'><ToggleSwitch width={2} height={1} /></div>
                            <div className="font-[400] text-[0.7rem] w-[9rem] h-[1rem] ">EasyDine payment method</div>
                        </div>


                        <div className="flex gap-1">
                            <div className='pt-[2px]'><ToggleSwitch width={2} height={1} /></div>
                            <div className="font-[400] text-[0.8rem] h-7">Others</div>
                        </div>
                    </div>

                </div>

            </div>

            <MainLowerLeft />

        </div>
    )
}

export default MainLower
