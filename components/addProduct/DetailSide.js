"use client"
import React, { useState } from 'react'
import {Textarea,Switch} from "@nextui-org/react";
import BasicDateTimePicker from '../Assets/MUI/BasicDateTimePicker';
import MuiToggelSwitch from '../Assets/MUI/MuiToggelSwitch';

function DetailSide() {
    return (
        <div className='w-[60%] flex flex-col gap-2'>
            <ProductInformation />
            <OverAllPricing/>
        </div>

    )
}

export default DetailSide









const ProductInformation = () => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
            <div className='w-full bg-[#090E2B] rounded-xl flex flex-col p-4 gap-6'>
                <div className='w-full font-semibold text-lg'>Product Information</div>
                <div className='flex flex-col gap-2'>
                    <form className='flex gap-3'>
                        <div className='flex flex-col w-full gap-2'>
                            <div>Product Name</div>
                            <div className='p-2 border-[1px] bg-[#202854] border-white rounded-xl'><input type="text" name="" id="" placeholder='eg. Hookah' className='w-full border-none outline-none bg-[#202854]' /></div>
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <div>Category</div>
                            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} className=' p-2 border-[1px] bg-[#202854] border-white rounded-xl'>
                                <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="">Select an option</option>
                                <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="Fruit">Fruit</option>
                                <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="Drink">Drink</option>
                                <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="FastFood">Fast Food</option>
                                <option className='p-2 border-[1px] bg-[#202854] border-white rounded-xl' value="Juice">Juice</option>
                            </select>
                        </div>
                    </form>
                    <form className='flex gap-2'>
                        <div className='flex flex-col w-1/2 gap-2'>Description
                            <TextArea/>
                            <div className='flex flex-col gap-2'>
                                Collection
                                <div className='w-full h-8 border-[1px] border-white rounded-lg bg-[#202854] p-2 flex'><input type='text' placeholder='e.g DayCard' className='border-none outline-none h-full w-full bg-[#202854] text-xs'/></div>
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <div>Atrikelnummer</div>
                            <div className='w-[70%] p-1 pl-3 rounded-xl border-[1px] bg-[#202854] '><input type="text" className='border-none outline-none w-full bg-[#202854]' placeholder='eg. 74219241941 '/></div>
                            {/* here i have to add the togel button and date and time seter  */}
                            <SwitchArea/>
                            <div className='flex flex-col gap-1'>Quantity
                            <div className='w-full h-8 border-[1px] border-white rounded-lg bg-[#202854] p-2 flex'><input type='number' placeholder='e.g 2' className='border-none outline-none h-full w-full bg-[#202854] text-xs'/></div></div>
                        </div>
                    </form>
                </div>
            </div>
    )
}

const TextArea=()=>{
    return(
        <Textarea
      placeholder="Enter your description"
      className="max-w-xs"
      color='secondary'
      minRows={5}
    />
    )
}


const SwitchArea=()=>{
    return(
        <div className='grid grid-cols-2 gap-2'>
            <div className='flex items-center text-sm text-gray-400 gap-1'><Switch aria-label="Automatic updates" size='sm' className='w-10'/>Nicht Verfügbar</div>
            <div className='w-[90%] h-8 border-[1px] border-white rounded-lg bg-[#202854]'>
                {/* <BasicDateTimePicker/> */}
            </div>
            <div className='flex items-center text-sm text-gray-400 gap-1'><Switch  aria-label="Automatic updates" size='sm'/>Rabatt in %</div>
            <div className='w-[90%] h-8 border-[1px] border-white rounded-lg bg-[#202854] p-2 flex'><input type='text' placeholder='Enter the disscount' className='border-none outline-none h-full w-full bg-[#202854] text-xs'/></div>
        </div>
    )
}



// dividing it into the two parts

const OverAllPricing=()=>{
    return(
        <div className='w-full flex gap-2'>
             <Pricing/>
             <Setting/>
        </div>
    );
}

const Pricing=()=>{
    return(
        <div className='w-[70%] bg-[#090E2B] rounded-xl flex flex-col p-5 gap-4'>
            <div className='text-lg font-bold'>
                Pricing
            </div>
            <div className='flex gap-2 w-full '>
                <div className='flex flex-col w-1/2 gap-1 text-sm'>
                    Price
                    <div className='w-full rounded-xl p-1 bg-[#202854] border-[1px] border-white'><input type='text' placeholder='e.g 99.9$' className='border-none outline-none h-full w-full bg-[#202854] text-xs'/></div>
                </div>            
                <div className='flex flex-col w-1/2 gap-1 text-sm'>
                    currancy
                    <div className='w-full rounded-xl p-1 bg-[#202854] border-[1px] border-white'><input type='text' placeholder='CHF' className='border-none outline-none h-full w-full bg-[#202854] text-xs'/></div>
                </div> 
            </div>
        </div>
    );
}


const Setting=()=>{
    return(
        <div className='w-[30%] bg-[#090E2B] rounded-xl flex flex-col text-xs p-2 text-[gray] gap-1'>
            <p>Settings</p>
            <div className='flex w-full items-center'><Switch defaultSelected size="sm"></Switch>Monthly product update</div>
            <div className='flex w-full items-center'><Switch defaultSelected size="sm"></Switch>Optinal Auswahl Pakete</div>
            <div className='flex w-full items-center'><Switch defaultSelected size="sm"></Switch>Altersnachfrage 18</div>
        </div>
    );
}