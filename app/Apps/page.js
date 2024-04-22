import Main from '@/components/Apps/Main'
import Footer from '@/components/Footer'
import NavBar from '@/components/dashboard/NavBar'
import Sidebar from '@/components/dashboard/SideBar'
import React from 'react'
import { easydineDB } from '../back-end/db'


function page() {
  return (
    <div className='flex h-screen w-screen bg-backColor overflow-x-hidden'>
        <Sidebar height={"h-[170%]"}/>
        <div className='flex flex-col w-full'>
            <NavBar page={"Apps"} />
            <div className='text-2xl font-bold ml-10 mt-4 text-white'> Restaurantname</div>
            <Main/>
            <Footer margenLeft={"ml-10"}/>
        </div>
      
    </div>
  )
}

export default page
