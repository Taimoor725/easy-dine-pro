import React from 'react'
import MainSection from '@/components/editproduct/MainSection'
import Sidebar from '@/components/dashboard/SideBar'
import NavBar from '@/components/editproduct/NavBar'

const page =() => {
  return (
    <div className="flex bg-backColor h-screen w-screen overflow-auto">
      <Sidebar/>
      <div className="flex flex-col">
          <NavBar/>
          <MainSection/>
      </div>
    </div>
  )
}

export default page
