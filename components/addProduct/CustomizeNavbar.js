import React from 'react'
import Link from "next/link"

function CustomizeNavbar() {
  return (
    <div className='w-full flex px-10 pt-12 gap-6'>
        <div className='w-[55%] flex flex-col gap-3'>
            <div className='w-full h-auto flex items-center gap-5'>
                <p className='font-bold text-2xl'>Make the changes below</p>
                <button className='w-40 p-1 border-[0.5px] border-white rounded-md text-sm flex items-center justify-center'><Link href='/Apps'>go back to Apps</Link></button>
            </div>
            <div className='flex flex-wrap font-light text-xs text-gray-500'>We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play.</div>
        </div>


        <div className='flex w-[45%] p-5 rounded-xl bg-transparent bg-slate-800 gap-4'>
              <button className='w-[34%] rounded-md p-2 text-xs bg-[#080E2B] shadow-xl shadow-[#0269E5]'>Produkt Hinzufügen</button>
              <button className='w-[32%] p-2 rounded-md text-xs bg-[#D30000] shadow-xl shadow-[#D30000]'>Produkt Löschen</button>
              <button className='w-[32%] p-2 text-xs rounded-md bg-[#04B816] shadow-xl shadow-[#04B816]'>Aktiv</button>
        </div>
    </div>
  )
}

export default CustomizeNavbar


