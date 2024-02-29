import React from 'react'
import SideBar from "@/components/dashboard/SideBar";
import MailPass from '@/components/login/MailPass'

function page() {
  return (
    <div className=' flex w-screen h-screen bg-[#0F1535] overflow-x-hidden'>
        <SideBar/>
        <MailPass/>
    </div>
  )
}

export default page