import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { IoPerson } from "react-icons/io5";
import logo from "@/assets/logo/cinemax-logo-small.png"
const Navbar = () => {
  return (
    
    <div className='z-50 backdrop-blur w-3/6 h-20 px-6 flex items-center justify-between bg-gray-800/45 rounded-b-3xl mx-auto sticky top-0 hover:bg-customBackColor ease-in-out duration-300 '>
      <Link href="/">
      <Image
      src={logo}
      width={108}
      height={35}
      alt="Home page"
    />
      </Link>
      <hr />
      <ul className='flex h-full items-center justify-center' >
        <li className='h-full flex'>
          <Link className='w-28 flex justify-center items-center hover:shadow-lg hover:shadow-rose-500 hover:border-b-2 hover:bg-rose-700/75 hover:ease-in hover:duration-300' href="/order"><p>Repertuar</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='w-28 flex justify-center items-center hover:shadow-lg hover:shadow-rose-500 hover:border-b-2 hover:bg-rose-700/75 hover:ease-in hover:duration-300' href="/cennik"><p>Cennik</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='w-28 flex justify-center items-center hover:shadow-lg hover:shadow-rose-500 hover:border-b-2 hover:bg-rose-700/75 hover:ease-in hover:duration-300' href="/aktualnosci"><p>Aktualności</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='w-28 flex justify-center items-center hover:shadow-lg hover:shadow-rose-500 hover:border-b-2 hover:bg-rose-700/75 hover:ease-in hover:duration-300' href="/kontakt"><p>Kontakt</p></Link>
          </li>
      </ul>
      <div className='flex gap-6'>
      {/* <span>Login</span>
        <span>Rejestracja</span> */}
      <Link className='hover:shadow-lg hover:shadow-sky-500 hover:border-b-2 hover:ease-in hover:duration-300 flex items-center' href="/login"><IoPerson /><p>&nbsp;Login</p></Link>
      <Link className='hover:shadow-lg hover:shadow-sky-500 hover:border-b-2 hover:ease-in hover:duration-300' href="/register"><p>Rejestracja</p></Link>
      </div>
    </div>

  )
}

export default Navbar