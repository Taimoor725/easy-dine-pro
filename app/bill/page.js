import Resturant from '@/components/BIlls/Resturant'
import NavBar from '@/components/dashboard/NavBar'
import Sidebar from '@/components/dashboard/SideBar'
import React from 'react'
import HomePage from '@/components/BIlls/Payments'

function page() {
  return (
    <div className='flex w-screen h-screen bg-backColor overflow-x-hidden'>
        <Sidebar height="min-h-[58rem] max-h-[60rem]"/>
        <div className='flex flex-col w-full gap-4'>
            <NavBar page={"Arbeit’s Space"} subpage={"Bills"}/>
            <div className='h-screen flex flex-col px-10 gap-6'>
              <Resturant ResPic="/frame_1.png" ResName={"Pasha Lounge "} contact={"Info@pashalounge.ch"}/>
              <HomePage/>
            </div>
        </div>
    </div>
  )
}

export default page
