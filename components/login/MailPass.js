'use client'
import React, { useState} from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase.config';
import { useRouter } from "next/navigation";

function MailPass() {
    const router=useRouter();
    
        const [email,setEmail]=useState("");
        const [password,setPasswod]=useState("");

        const HandelSignIn = async (e) => {
            e.preventDefault();
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                router.push('/dashboard/')
                console.log(result)}
            catch (error) {
                console.error('Error signing in:', error.message);
                router.push('/signin/signin')
                console.log('no')
            }
        };

const SiginPage=()=>{
    router.push("/signin/signin")
}




return (
    <div className='flex flex-col text-white justify-center items-start gap-[5rem] w-1/2 pl-[6rem] pb-14'>
        <div className='flex flex-col gap-6'>
            <div className='font-bold'>Anmelden</div>
            <div className='flex flex-col gap-5'>
                <fieldset className="border-[2px] w-[5rem] rounded-[4px]">
                    <legend className='text-sm font-light'>E-Mail</legend>
                    <input type='email' className="border-none outline-none bg-[#0F1535] w-[25rem] h-[1.5rem] pl-2 pb-2" onChange={(e) => setEmail(e.target.value)}/>
                </fieldset>
                <fieldset className="border-[2px] w-[5rem] rounded-[4px]">
                    <legend className='text-sm font-light'>Password</legend>
                    <input type='password' className="border-none outline-none bg-[#0F1535] w-[25rem] h-[1.5rem] pl-2 pb-2" onChange={(e)=> setPasswod(e.target.value)} />
                </fieldset>
                <button className='underline text-sm font-normal justify-start flex '><p>Passwort vergessen?</p></button>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <button className='w-[14.5rem] h-[2.6rem] bg-[#08CFB8] rounded-sm font-bold hover:scale-110 hover:translate-x-3' onClick={HandelSignIn}>Anmelden</button>
            <div className='flex gap-1.5'>
                <div className='font-light text-[13px]'>Sie haben noch kein Konto?</div>
                <button className='underline text-[13px] font-bold' onClick={SiginPage}>Registrieren</button>
            </div>
        </div>
    </div>
)
}

export default MailPass




const LoginInfo = ({ field }) => {

}