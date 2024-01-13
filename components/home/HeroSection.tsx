import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800'>
        <div className='p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5'>
            <h1 className='text-5xl font-bold'>
             Welcome to Files For All. <br/>
             <br/>
             Where you can store your files 
            </h1>
            <p className='pb-20'>
             Enhance your personal storage with Files For All, offering a simple 
             and 
             efficient way to upload, organize, and access files from anywhere.
            </p>
            <Link href='/dashboard' className='flex cursor-pointer bg-blue-500 p-5 w-fit items-center'>
                Try it for free!
                <ArrowRightIcon className='ml-8 w-6 h-6' />
            </Link>
        </div>
        <div className='bg-[#1E1919] dark:bg-slate-800 h-full p-10'>
           <video autoPlay loop muted className='rounded-lg'>
            <source 
            src=""
            type="video/mp4"
            />
            Your browser does not support the video tag.
           </video> 
        </div>
    </div>
  )
}

export default HeroSection