import React from 'react'

import MailPass from '@/components/login/MailPass'
import LoginSideBar from '@/components/LoginSideBar'


function page() {
  return (
    <div className=' flex w-screen h-screen bg-[#0F1535] overflow-x-hidden'>
        <LoginSideBar/>
        <MailPass/>
    </div>
  )
}

export default page