"use client"
import SideBar from "@/components/dashboard/SideBar";
import React, { useState ,useEffect} from 'react'
import { sendEmailVerification , createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '@/firebase.config';
import { redirect, useRouter } from "next/navigation";
import LoginSideBar from "@/components/LoginSideBar";


function page() {
    const router=useRouter();
    const [email,setEmail]=useState("");
    const [password,setPasswod]=useState("");

    const Sigin = async (e) => {
        e.preventDefault();
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(result.user)
            console.log(result);
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };
    
    return (
        <div className='flex h-screen w-screen font-italic bg-backColor text-white overflow-hidden'>
            <LoginSideBar/>
            <div className='flex flex-col justify-center gap-[1.4rem] pl-[5rem]'>
                <p className='font-bold text-2xl '>Lassen Sie uns anfangen</p>
                <div className='flex flex-col gap-4'>
                    <p className='font-light text-sm'>Firstname</p>
                    <div className='flex '>
                        <form action="" className='flex gap-12'>
                            <div className='flex items-center gap-1'>
                                <input type="radio" value="Frau" name='Frau' className='w-[0.8rem] h-[0.8rem] rounded-full border-2 ' />
                                <label htmlFor="Frau">Frau</label>
                            </div>


                            <div className='flex items-center gap-2'>
                                <input type="radio" value="Herr" name='Herr' className='w-[0.8rem] h-[0.8rem] rounded-full border-2 ' />
                                <label htmlFor="Herr">Herr</label>
                            </div>


                            <div className='flex items-center gap-2'>
                                <input type="radio" value="Diverses" name='Diverses' className='w-[0.8rem] h-[0.8rem] rounded-full border-2 ' />
                                <label htmlFor="Diverses">Diverses</label>
                            </div>
                        </form>
                    </div>

                </div>

                <div className='flex flex-col gap-6'>
                    <div className='flex gap-6'>
                        <DataField field={'Firstname'} type={'text'} />
                        <DataField field={'Lastname'} type={'text'} />
                    </div>
                    <div className='flex gap-6'>
                        <DataField field={'Email'} type={'email'} onChange={(value) => setEmail(value)} />
                        <DataField field={'Password'} type={'password'} onChange={(value) => setPasswod(value)} />
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <fieldset className="border-[2px] w-[5rem] rounded-[4px]">
                        <legend className='text-sm font-light'>Telefonnummer</legend>
                        <input type='number' id='number' className="border-none outline-none bg-backColor w-[42rem] h-[1.2rem] pl-2 pb-2" />
                    </fieldset>


                    <div className='flex items-start gap-2'>
                        <input type="checkbox" name='check_1' className='w-[1rem] h-[1rem] mt-[0.3rem]' />
                        <label htmlFor="check_1" className='w-[35rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus praesentium voluptate molestiae architecto repudiandae veritatis.r</label>
                    </div>

                    <p className='w-[35rem] font-light text-[11px]'>Mit dem Absenden dieses Formulars akzeptieren Sie unsere AGB und nehmen unsere Datenschutzerklärung zur Kenntnis</p>


                    <button className='w-[13rem] h-[2rem] bg-[#08CFB8] rounded-[9px] flex text-black justify-center items-center' onClick={Sigin}>Weiter</button>
                    <div>
                        <div className='flex w-[13rem] justify-center text-[0.7rem]'>Haben Sie bereits ein Benutzerkonto?</div>
                        <button className='w-[13rem] flex justify-center font-semibold underline' onClick={()=>router.push("/login/")}>Anmelden</button>
                    </div>
                </div>

                <div>
                </div>

                <div>
                </div>

            </div>
            
        </div>
    )
}

export default page





const DataField = ({ field, type, onChange }) => {
    const handleChange = (e) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };
  
    return (
      <div>
        <fieldset className="border-[2px] w-[5rem] rounded-[4px]">
          <legend className='text-sm font-light'>{field}</legend>
          <input
            type={type}
            id={field}
            className="border-none outline-none bg-backColor w-[20rem] h-[1.2rem] pl-2 pb-2"
            onChange={handleChange}
          />
        </fieldset>
      </div>
    );
  };
  

 
  
