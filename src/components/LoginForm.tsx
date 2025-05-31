"use client";

import { useEffect, useRef } from "react";
import { useLogin } from "@/contexts/LoginContext";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineClose } from "react-icons/md";

export default function LoginForm() {
  const { isOpen, closeLogin } = useLogin();
  const formRef = useRef<HTMLDivElement>(null);
  const pictureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        (formRef.current || pictureRef.current) &&
        !formRef.current?.contains(event.target as Node) &&
        !pictureRef.current?.contains(event.target as Node)
      ) {
        closeLogin();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeLogin]);

  if (!isOpen) return null;

  return (
    <div className='bg-black/5 flex items-center justify-center fixed w-svw h-svh lg:h-9/10 z-10'>
      {/* Offers/Disclaimer */}
      <div
        ref={pictureRef}
        className='bg-orange-300 hidden lg:block rounded-l-2xl w-[20vw] h-[70%] text-center shadow-sm'
      >
        <Image
          src={"/Images/hotel-checkin.jpg"}
          alt='Current offers'
          width={5626}
          height={3334}
          className='rounded-tl-2xl w-full'
        />
        <p className='text-2xl text-white my-12'>
          1st hotel booking: upto 30% off
        </p>
        <p className='text-2xl text-white my-12 motion-safe:animate-bounce'>
          CODE: GHUMTRIPNEW
        </p>
      </div>

      {/* Login Form */}
      <div
        ref={formRef}
        className='bg-white lg:flex flex-col rounded-t-2xl lg:rounded-r-2xl lg:rounded-l-none w-full h-[40vh] md:h-[30vh] lg:w-[30vw] lg:h-[70%] fixed lg:static bottom-0 lg:shadow-xl'
      >
        <div className='basis-full'>
          <div className='flex justify-between items-center m-4'>
            <p className='md:text-xl lg:text-2xl text-blue-700'>
              Log in / Sign up
            </p>
            <button onClick={closeLogin} className='text-2xl'>
              <MdOutlineClose />
            </button>
          </div>
          <div className='flex gap-2 m-4 justify-center'>
            <select className='h-8 lg:h-12 px-2 border border-gray-300 rounded'>
              {/* Flags should be added before country code */}
              <option value='+91'>+91</option>
            </select>
            <input
              type='text'
              placeholder='Enter mobile number'
              className='h-8 lg:h-12 p-2 border border-gray-300 rounded'
            />
          </div>
          <div className='flex justify-center m-4'>
            <button className='capitalize bg-blue-500 hover:bg-blue-500/90 text-white w-full h-8 rounded-md'>
              Continue
            </button>
          </div>
          <div className='flex items-center justify-center gap-4 m-4'>
            <hr className='flex-grow border-t border-gray-300' />
            <span className='text-gray-500 text-sm'>or</span>
            <hr className='flex-grow border-t border-gray-300' />
          </div>
          <div className='flex justify-center'>
            <button className='text-2xl p-2 border border-gray-300 rounded-[50%]'>
              <FcGoogle />
            </button>
          </div>
        </div>
        <div className='mx-4 my-8 text-xs text-center'>
          <p>
            By proceeding, you agree to Ghumtrip&apos;s Privacy Policy, User
            Agreement and T&Cs.
          </p>
        </div>
      </div>
    </div>
  );
}