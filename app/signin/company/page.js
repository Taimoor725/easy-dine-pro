import SideBar from '@/components/SideBar'
import React from 'react'

function page() {
  return (
    <div className='flex w-screen h-screen bg-backColor text-white '>
        <SideBar/>
        <div className=' flex flex-col w-[73%]   bg-black '>
            <div className='flex w-full justify-end p-4'>Abmelden</div>
            <div className='w-full h-full bg-[green]'>
                <p className='font-bold text-xl'>Wählen Sie Ihr Unternehmen</p>
                <div className='bg-black'>
                  <fieldset className="border-[2px] w-1/2 rounded-[4px]">
                      <legend className='text-sm font-light'>Unternehmen</legend>
                      <input type='text'  className="border-none outline-none bg-[#1352AA] h-full w-full pl-2 pb-2"/>
                </fieldset>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
