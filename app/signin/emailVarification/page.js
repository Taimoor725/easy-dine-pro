import React from 'react'
import Image from 'next/image'

function emailVarification() {
  return (
    <div className='w-screen h-screen bg-brLightBlue text-white overflow-hidden' >
        <div className='flex w-full p-4  justify-end items-center px-14'> Abmelden</div>
        <div className='flex flex-col w-full h-full justify-start items-center gap-6'>
            <div><Image src="/grafik-removebg-preview(1).png" width={150} height={55}/></div>
            <div className='font-bold text-xl'>Bitte überprüfen Sie Ihre E-Mail-Adresse</div>
            <div className='font-light text-xs'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam das</div>
            <div className='text-xs font-bold underline'>info@smatik.ch</div>
            <div className='w-2/6 h-auto text-center'>dsadasdsadsadsaghdsahdjk ahsjdsah jsahj dhsajd hasjkdh sja khdj ksahd jkash djashdjksahdjkashdjsahdjk saahds adsa dsadsa dsd dsads adsadas  dsadsads adsadsad dsad </div>
            <div className='flex justify-center items-center w-3/12 h-10 rounded-md bg-brLightGreen font-bold text-black'>E-Mail erneut versenden</div>
            <div className='flex flex-col justify-center items-center text-xs font-semibold gap-2'>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                <p className='underline'>Klicken Sie hier um sie zu aktualisieren</p>    
            </div>

            <div className='flex w-full h-auto justify-start items-end gap-2 ml-24 pt-7'>
                <div className='font-light text-xs'>Powered by </div>
                <div className='pt-1'><Image src="/SMATIK_logo.png" width={50} height={40}/></div>
            </div>
          </div> 
    </div>
  )
}

export default emailVarification
