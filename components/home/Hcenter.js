import React, { Component, useState } from 'react'


export default class Hcenter extends Component {
  render() {
    return (
      <div>
      <div className='flex flex-col w-[95%] h-[50rem] bg-[#060B27] text-white ml-[2.5rem] gap-2 pt-2 rounded-xl'>
        <div className='font-[700] px-4'>EasyDine</div>
        <div className='font-[400] px-4'>Architects design houses</div>
        <div className='flex flex-col gap-[13rem]'>
            <ThreePicPlace/>
            <ThreePicPlace_2/>
        </div>

      </div>
        <div className='flex w-full h-[3rem] text-white gap-2 pl-[2.5rem] items-center mt-[2rem]'>
            <div className='font-light h-1/3  text-sm'>Powered by </div>



            <div className='flex w-[83%] h-1/3 justify-end pr-4 gap-8'>
                  <div>Impressum</div>
                  <div>Blog</div>
                  <div>License</div>
            </div>
              
        </div>
      </div>
    )
  }
}




const ThreePicPlace=()=>{
    return(
        <div className='flex w-full h-auto gap-4 justify-center'>
            <PicPlace pic={"./png/R1.png"} projectno={'Project #1'} resno={'Restaurant 1'} quality={'As Uber works through a huge amount of internal management turmoil.'}/>
            <PicPlace pic={"./png/R2.png"} projectno={'Project #2'} resno={'Restaurant 2'} quality={'As Uber works through a huge amount of internal management turmoil.'}/>
            <PicPlace pic={"./png/R3.png"} projectno={'Project #3'} resno={'Restaurant 3'} quality={'As Uber works through a huge amount of internal management turmoil.'}/>
        </div>      
    );
}




const ThreePicPlace_2=()=>{
  return(
      <div className='flex w-full h-1/2 gap-4 justify-center'>
          <PicPlace pic={"./png/R4.png"} projectno={'Project #4'} resno={'Restaurant 4'} quality={'As Uber works through a huge amount of internal management turmoil.'}/>
          <PicPlace pic={"./png/R5.png"} projectno={'Project #5'} resno={'Restaurant 5'} quality={'As Uber works through a huge amount of internal management turmoil.'}/>
          <PicPlace pic={"./png/R6.png"} projectno={'Project #6'} resno={'Restaurant 6'} quality={'As Uber works through a huge amount of internal management turmoil.'}/>
      </div>      
  );
}




const PicPlace=({pic,projectno,resno,quality})=>{

  const [col,setcolor]=useState("");

  const btnClicked=()=>{
   return(
      col===""? setcolor('bg-[#0075FF]'):col=== 'bg-[#0075FF]'?setcolor(""):setcolor('bg-[#0075FF]')
   )
  }

    return(
        <div className='flex flex-col rounded-xl w-[21.5rem] h-[10rem] bg-black gap-3'>
            <img src={pic} alt='loading' className='w-full h-full rounded-xl object-cover hover:scale-110 transition-transform'/>
            <div className='font-light'>{projectno}</div>
            <div className='font-bold'>{resno}</div>
            <div className='font-light w-[20rem] text-[0.8rem]'> {quality}</div>
            <button onClick={btnClicked} className={`w-[7rem] h-[2rem] border-[1px] border-white rounded-[10px] ${col} hover:scale-110 transition-transform`} >View all</button>
        </div>
    )

}



