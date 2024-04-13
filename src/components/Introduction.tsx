import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import family from "@/assets/family-2.png"
import logo3D from "@/assets/logo/logo3D-cropped4.png"
const Introduction = () => {
  return (
    <div className='flex justify-center flex-row gap-12'>
      <p className='customFont'>Odkryj to z Nami!</p>
      <Image
      src={family}
      width={512}
      height={512}
      alt="Odkryj to z Nami!"
    />
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