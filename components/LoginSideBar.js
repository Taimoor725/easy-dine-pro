
import React from 'react'
import Image from 'next/image'

function LoginSideBar() {
  return (
    <div className='flex flex-col w-[37%] h-full bg-sideBarcol gap-[3.5rem] pt-[4rem] pl-[3rem] text-white'>
        <div className='flex flex-col gap-2'>
          <div className='w-full '><img src="/png/pic_1.png" alt="logo"className='w-[5rem]'/></div>
          <div className='w-[65%] h-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, mollitia.</div>
        </div>
{/* add content in this div */}
        <div className='flex flex-col gap-4 w-full'>
          <AddContent content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempore eos sunt, perferendis hic accusamus?'}/>
          <AddContent content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempore eos sunt, perferendis hic accusamus?'}/>
          <AddContent content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempore eos sunt, perferendis hic accusamus?'}/>
          <AddContent content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste tempore eos sunt, perferendis hic accusamus?'}/>
        </div>

        <div className='flex w-full h-full items-end gap-2 pb-[1.5rem]'>
          <div className='text-xs'>Powered by </div>
          <Image src="/smatik_logo.png" width={60} height={30}/>
        </div>
    </div>

  )
}

export default LoginSideBar



const AddContent=({content})=>{
  return(
        <div className='flex items-start gap-2 w-4/5'>
          <img src="/circle-check.svg" alt='loading' className='text-white w-[1rem] pt-1' />
          <div className='text-[12px]'>{content}</div>
        </div>
  )
}
