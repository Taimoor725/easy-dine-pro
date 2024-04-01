import Main from '@/components/Apps/Main'
import NavBar from '@/components/dashboard/NavBar'
import Sidebar from '@/components/dashboard/SideBar'
import React from 'react'

function page() {
  return (
    <div className='flex h-screen w-screen bg-backColor overflow-x-hidden'>
        <Sidebar/>
        <div className='flex flex-col w-full'>
            <NavBar page={"Apps"} />
            <div className='text-2xl font-bold ml-10 mt-4 text-white'> Restaurantname</div>
            <Main/>
        </div>
      
    </div>
  )
}

export default page
