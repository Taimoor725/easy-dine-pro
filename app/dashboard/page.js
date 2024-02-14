import React from 'react'
import DBsidebar from '@/components/dashboard/DBSideBar' 
import NvBar from '@/components/dashboard/NavBar'
import MainSection from '@/components/dashboard/MainSection'


const page = () => {
  return (
    <div className="flex bg-backColor h-screen w-screen overflow-auto">
{/* SideBar Adjustments      */}
      <DBsidebar/>

    <div className="flex flex-col">
      <NvBar/>
      <MainSection/>
    </div>
      
    </div>
  )
}

export default page
