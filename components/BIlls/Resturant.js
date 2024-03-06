"use client";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import dynamic from 'next/dynamic';
import { getCurrentDate } from './Date';

const Clock = dynamic(() => import('react-live-clock'), { ssr: false });

function Resturant({ ResPic, ResName, contact }) {
  const date = getCurrentDate();

  return (
    <div className='h-32 bg-sideBarcol flex rounded-lg p-4 items-center gap-3'>
      <img src={ResPic} className='w-20 h-20' />
      <div className='flex flex-col text-white justify-center'>
        <div className='font-bold text-lg'>{ResName}</div>
        <div className='font-light text-xs'>{contact}</div>
      </div>
      <div className='flex-grow flex justify-end gap-5'>
        <div className='w-48 rounded-lg p-2 bg-backColor flex items-center text-white gap-4 '>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder='Type here...' className='w-full font-light border-none outline-none bg-backColor' />
        </div>
        <div className='flex w-48 rounded-lg p-2 bg-backColor text-white font-light text-base justify-center items-center gap-4'>
          <div>{date}</div>
          <div>|</div>
          <Clock format={'h:mm:ss'} className='text-base' ticking={true} />
        </div>
      </div>
    </div>
  );
}

export default Resturant;
