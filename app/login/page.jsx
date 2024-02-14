'use client'
import { auth } from "@/firebase.config";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithEmailAndPassword } from "firebase/auth";
import gsap from "gsap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPasswod] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard/')
    } catch(e) {
      console.log(e);
      setError(true);
    }
  }

  return (
    <div className="bg-sideBarcol w-screen h-screen overflow-hidden relative">
      <div className="flex items-center justify-center text-iconcol text-4xl w-full h-2/3">
        <Image
          src={"/png/pic_1.png"}
          width={400}
          height={100}
          alt="logo"
          className="object-cover"
        />
        <div className="flex flex-col gap-4 w-1/3  ">
          <div>Login Kunden</div>

          <form className="flex  text-sm gap-4 items-start justify-center mt-4" onSubmit={handleSumbit}>
            <fieldset className="input">
              <legend>Kunden nr.</legend>
              <input type="text" className="input_focus" />
            </fieldset>
            <fieldset className="input">
              <legend>Email</legend>
              <input type="email"  className="input_focus"  onChange={(e) => setEmail(e.target.value)}/>
            </fieldset>
            <div className="flex flex-col gap-2">
              <fieldset className="input">
                <legend>Password</legend>
                <input type="password"  className="input_focus" onChange={(e) => setPasswod(e.target.value)}/>
              </fieldset>
              <button className="font-bold text-xs">Forgot password?</button>
            </div>
            <button
              type="submit"
              className="rounded-md bg-brAqua px-4 py-0 text-white font-bold border border-white h-10 ml-10 mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
      {error && <Error router={router} callback={setError}/>}
    </div>
  );
};

export default Page;
const Footer = () => {
  return (
    <div className="bg-backColor h-1/3 w-screen text-iconcol text-sm p-8 flex items-end justify-center">
      <div className="flex items-center justify-between w-full">
        <div className="logo flex gap-4 font-bold">
          Powered by
          <Image
            src={"/smatik_logo.png"}
            width={80}
            height={100}
            className="object-cover invert"
            alt="smatik-logo"
          />
        </div>
        <div className="flex gap-4">
          <button>Cookies Policy</button>
          <button>Privacy Policy</button>
          <button>Terms & Conditions</button>
        </div>
      </div>
    </div>
  );
};
const Error = ({router, callback: setError}) => {
  const ref = useRef();
  useEffect(() =>{
    if(ref.current){
      const tl = gsap.timeline()
      tl.fromTo(ref.current, {
        y: 500, opacity: 0.5, duration: 1
      }, {y: 200, opacity: 1})
    }
  }, [])
  return(
  <div className="w-2/3 h-1/2 absolute bottom-2/3 right-1/2 translate-x-1/2 translate-y-[500px] bg-Bodycol rounded-3xl shadow z-10" ref={ref}>
      <div className="flex items-center justify-around h-full">
        <Image
          src={"/png/pic_1.png"}
          width={400}
          height={100}
          alt="logo"
          className="object-cover"
        />
        <div className="flex flex-col gap-8 text-3xl text-white ">
          Create an account
          <button onClick={() => router.push('/signup/')} className="bg-btncol p-4 text-xl font-bold rounded-xl hover:scale-110 transition-transform">Sign Up</button>
          <button className="text-sm underline">forgot password?</button>
        </div>
        <button className="h-full flex justify-start items-start py-10" onClick={() => setError(false)}>
          <FontAwesomeIcon icon={faClose} size="2xl" className="text-white"/>
        </button>
      </div>
  </div>
  )
}
