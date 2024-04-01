"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function main() {
    const router=useRouter();


    const Button3=()=>{
        
    }

    
    const AppList=()=>{
        return(
            <div className='grid grid-cols-5 gap-3'>
                <div><Card name={"Kalender"} discription={"As Uber works through a huge amount of internal management turmoil."}/></div>
                <div><Card name={"Kontakte"} discription={"Music is something that every person has his or her own specific opinion about."}/></div>
                <div onClick={()=>router.push("/bill/")}><Card name={"Rechnungen"} discription={"As Uber works through a huge amount of internal management turmoil."}/></div>
                <div><Card name={"Produkte"} discription={"As Uber works through a huge amount of internal management turmoil."}/></div>
                <div><Card name={"EasyMeet"} discription={"As Uber works through a huge amount of internal management turmoil."}/></div>
                <div><Card name={"Lagersystem"} discription={"As Uber works through a huge amount of internal management turmoil."}/></div>
                <div><Card name={"Support"} discription={"As Uber works through a huge amount of internal management turmoil."}/></div>
                <div><Card name={"QR Code Generator"} discription={"As Uber works through a huge amount of internal management turmoil."}/></div>
            </div>
        )
    }

    return (
    <div className='w-[95%] bg-sideBarcol rounded-md flex flex-col flex-wrap ml-10 gap-2 px-4'>
        <div className='flex flex-col'>
            <div className='font-bold text-xl text-white flex-wrap pt-2'>Apps</div>
            <div className='font-light text-sm text-gray-400 flex-wrap py-2'>apps in this page</div>
        </div>
        <AppList/>
    </div>
  )
}

export default main



const Card=({name,discription})=>{
    return(
    <div className='flex flex-col w-full text-white gap-3'>
        <div className='bg-[#0F0A32] rounded-md'><img src="/png/pic_1.png" alt="wait" /></div>
        <div className='text-bold font-xl'>{name}</div>
        <div className='text-sm font-light text-gray-300'>{discription}</div>
        <button className='w-[38%] p-3 rounded-md border-[1px] hover:bg-blue-500 hover:scale-105 text-xs'>View All</button>
    </div>
    )
}



