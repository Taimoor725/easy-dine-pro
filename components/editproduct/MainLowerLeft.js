import React from 'react'
import ToggleSwitch from './ToggelSwitch'

function MainLowerLeft() {
  return (
    <div className="flex flex-col w-[14.rem] h-auto bg-[#090F2A] rounded-[15px] pl-1 pt-[0.8rem] gap-3">
        <div className="flex flex-col gap-4">
            <div>Settings</div>
            <div className="flex gap-2">
                <ToggleSwitch width={2} height={1}/>
                <p className="font-[400] text-[13px]">closed</p> 
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={2} height={1}/>
                <p className="font-[400] text-[13px]">BreakFast Menu</p> 
            </div>


            <div className="flex gap-2">
                <ToggleSwitch width={2} height={1}/>
                <p className="font-[400] text-[13px]">Optional Selection Package</p> 
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={2} height={1}/>
                <p className="font-[400] text-[13px]">Age Demang 18?</p> 
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <ToggleSwitch width={2} height={1}/>
                <div>Minumum Order Value</div>
            </div>

            <div className="self-center flex w-[10rem] h-[40px] rounded-[15px] bg-[#0F1535] items-center pl-2 border-[1px]"><input type="text" placeholder='Enter Min Order Value' className="border-none outline-none bg-[#0F1535] w-[80%] h-[80%]" />
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={2} height={1}/>
                <div className='text-[13px]'>Stock System</div>
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={2} height={1}/>
                <div className='text-[13px]'>Easy Meel</div>
            </div>

            <div className="flex gap-2">
                <ToggleSwitch width={2} height={1}/>
                <div className='text-[13px]'>Take Away </div>
            </div>

        </div>

    </div>
  )
}

export default MainLowerLeft
