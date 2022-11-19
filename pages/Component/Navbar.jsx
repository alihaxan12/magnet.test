import React from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className="w-full h-20 bg-[#14213d]      ">
            <div className="flex justify-between   items-center  h-full px-2 lg:px-16 w-full   ">
                <Link href='/'><Image src='/image/logo.png' className='cursor-pointer' width={400} height={70}  alt='image' /></Link>
                <div >
                    <ul className="hidden md:flex  ">
                        <Link href="/WhoweAre"><li className="cursor-pointer  ml-10 font-bold text-white">Who We Are</li></Link>
                        <Link href='/Client'><li className="cursor-pointer  ml-10 font-bold text-white  ">Clients</li></Link>
                        <Link href='/Candidates'><li className="cursor-pointer  ml-10 font-bold text-white ">Candidates</li></Link>
                        <Link href='/SearchJob'><li className=" cursor-pointer ml-10 font-bold text-white  "> Search Jobs </li></Link>
                        <Link href='/ContactUs'><li className=" cursor-pointer ml-10 font-bold text-white  "> Contact Us </li></Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='md:hidden'>
                    {!nav ? <AiOutlineMenu size={40} className="fill-white" /> : <AiOutlineClose size={30} className="fill-white " />}
                </div>
            </div>
            <div className={nav ? 'sm:absolute md:hidden  top-15 w-full  bg-[#14213D]  p-10 ease-in duration-300 '
                : 'fixed top-[-100%]  ease-in duration-500'}>
                <div className='flex  flex-col'>
                    <ul className="text-white uppercase ">
                        <Link href="/WhoweAre"><li className="p-2 ">Who We Are</li></Link>
                        <Link href='/Client'><li className="p-2   ">Clients</li></Link>
                        <Link href='/Candidates'><li className="p-2  ">Candidates</li></Link>
                        <Link href='/SearchJob'><li className="p-2   "> Search Jobs </li></Link>
                        <Link href='/ContactUs'><li className="p-2   "> Contact Us </li></Link>
                    </ul>
                </div>
            </div>
        </div>
  )
}
