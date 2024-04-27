import CustomizeNavbar from '@/components/addProduct/CustomizeNavbar'
import ProductInfo from '@/components/addProduct/ProductInfo'
import NavBar from '@/components/dashboard/NavBar'
import Sidebar from '@/components/dashboard/SideBar'
import React from 'react'
import { easydineDB } from '../back-end/db'

function page() {
  easydineDB()
  return (
    <div className='flex h-screen w-screen bg-backColor overflow-x-hidden'>
        <Sidebar height={'min-h-[140%]'}/>
        <div className='w-full flex flex-col text-white'>
            <NavBar page={"Product"} subpage={"Edit Product"}/>
            <CustomizeNavbar/>
            <ProductInfo/>
        </div>
    </div>
  )
}

export default page
