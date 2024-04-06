import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  return (
    
    <div className='backdrop-blur w-3/6 h-20 px-6 flex items-center justify-between bg-gray-800/45 rounded-b-3xl mx-auto sticky top-0 hover:bg-customBackColor ease-in-out duration-300 '>
      <Link href="/">
      <Image
      src="/cinemax-logo-small.png"
      width={108}
      height={35}
      alt="Home page"
    />
      </Link>
      <hr />
      <ul className='flex h-full items-center justify-center' >
        <li className='h-full flex'>
          <Link className='navbar-mid' href="/order"><p>Repertuar</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='navbar-mid' href="/cennik"><p>Cennik</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='navbar-mid' href="/aktualnosci"><p>Aktualności</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='navbar-mid' href="/kontakt"><p>Kontakt</p></Link>
          </li>
      </ul>
      <div className='flex gap-6'>
      {/* <span>Login</span>
        <span>Rejestracja</span> */}
      <Link className='navbar-right flex items-center' href="/login"><IoPerson /><p>&nbsp;Login</p></Link>
      <Link className='navbar-right' href="/register"><p>Rejestracja</p></Link>
      </div>
    </div>

  )
}

export default Navbar