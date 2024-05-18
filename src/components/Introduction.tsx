import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import family from "@/assets/family-2.png"
import logo3D from "@/assets/logo/logo3D-cropped.png"
import { Caveat } from "next/font/google";

const caveat = Caveat({ 
  weight: ['400', '500', '600','700'], 
  subsets: ['latin'], 
  style: ['normal'], });

const Introduction = () => {

    
  return (

    <div className='flex justify-center flex-row gap-12'>
      <div className='relative'>
      <p className={`${caveat.className} text-7xl absolute bottom-10 drop-shadow-[5px_5px_5px_rgba(0,0,0,1)] right-0`}>Odkryj to z Nami!</p>
      <Image
      src={family}
      width={512}
      height={512}
      alt="Odkryj to z Nami!"
    />

      </div>
      
      <Image
      src={logo3D}
      width={512}
      height={512}
      alt="Cinemax!"
    />

    </div>
  )
}

export default Introduction