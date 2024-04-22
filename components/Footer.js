import React from 'react'

function Footer({margenLeft}) {
  return (
    <div className={`flex w-full ${margenLeft} py-7`}>
        <div className='flex text-white items-center gap-3'>
            <div className='font-light text-md'>Powerd By</div>
            <div><img src="/smatik_logo.png" alt="logo" className='w-24' /></div>
        </div>
        <div className='flex flex-grow pr-16  justify-end items-center'>
            <div className='flex gap-6 text-white text-sm font-light'>
                <div>Impressum</div>
                <div>Blog</div>
                <div>License</div>
            </div>
        </div>
    </div>
  )
}

export default Footer
