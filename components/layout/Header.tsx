import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ThemeToggler } from '../ThemeToggler'


const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <Link href="/" className=' flex items-center space-x-2'>
        <div className='w-fit'>
            <Image src={Logo} alt='logo' height={50} width={50}/>
        </div>
        <h1 className='font-bold text-xl'>
            Files For All
        </h1>
      </Link>
      <div className='px-5 flex space-x-2 items-center'>
        <ThemeToggler/>
        <UserButton afterSignOutUrl='/'/>
        <SignedOut>
            <SignInButton afterSignInUrl='/dasboard' mode='modal'/>
        </SignedOut>
      </div>
    </header>
  )
}

export default Header