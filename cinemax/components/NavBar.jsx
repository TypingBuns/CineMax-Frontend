import React from 'react'
import Link from "next/link";
import {Roboto} from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '100',
  variable: '--font-inter',
})

const NavBar = () => {
  return (
    <div className=' w-3/6 h-20 px-6 flex items-center justify-between bg-gray-800/45 rounded-b-3xl'>
      <span className=''>LOGO</span>
      <ul className='flex h-full ' >
        <li className='flex h-full '>
          <Link className='w-28 flex justify-center items-center hover:border-b-2 hover:bg-rose-700/75 ease-in duration-200' href="/order"><p>Repertuar</p></Link>
          </li>
        <li className='flex h-full '>
          <Link className='w-28 flex justify-center items-center hover:border-b-2 hover:bg-rose-700/75 ease-in duration-200' href="/order"><p>Cennik</p></Link>
          </li>
        <li className='flex h-full '>
          <Link className='w-28 flex justify-center items-center hover:border-b-2 hover:bg-rose-700/75 ease-in duration-200' href="/order"><p>Aktualności</p></Link>
          </li>
        <li className='flex h-full '>
          <Link className='w-28 flex justify-center items-center hover:border-b-2 hover:bg-rose-700/75 ease-in duration-200' href="/order"><p>Kontakt</p></Link>
          </li>
      </ul>
      <div className='flex gap-6'>
        <span>Login</span>
        <span>Rejestracja</span>
      </div>
    </div>

  )
}

export default NavBar