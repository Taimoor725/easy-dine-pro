"use client"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Clock from 'react-live-clock'; 
// import Date from './Date';
import { getCurrentDate } from "./Date"

function Resturant({ResPic,ResName,contact}) {

  const date=getCurrentDate();
  return (
    <div className='h-32 bg-sideBarcol flex rounded-lg p-4 items-center gap-3'>
        <img src={ResPic} className='w-20 h-20'/>
        <div className='flex flex-col text-white justify-center'>
            <p className='font-bold text-lg'>{ResName}</p>
            <p className='font-light text-xs'>{contact}</p>
        </div>
        <div className='flex-grow flex justify-end gap-5'>
          <div className='w-48 rounded-lg p-2 bg-backColor flex items-center text-white gap-4 '>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            <input type="text" placeholder='Type here...' className='w-full font-light border-none outline-none bg-backColor'/>
          </div>
          <div className='flex w-48 rounded-lg p-2 bg-backColor text-white font-light text-base justify-center items-center gap-4'>
            <p>{date}</p>
            <p>|</p>
            <Clock
                format={'h:mm:ss'} 
                className='text-base'
                ticking={true}/> 
          </div>

        </div>
    </div>
  )
}

export default Resturant
