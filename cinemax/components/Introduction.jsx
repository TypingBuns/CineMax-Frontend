import React from 'react'
import Link from "next/link";
import Image from 'next/image'

const Introduction = () => {
  return (
    <div className='flex justify-center'>
      <Image
      src="/family-2.png"
      width={512}
      height={512}
      alt="Odkryj to z Nami!"
      layout="fixed"
      objectFit="cover"
    />
    {/* <Image
      src="/cinemax-logo.png"
      width={3307}
      height={1071}
      alt="Home page"
    /> */}
    </div>
  )
}

export default Introduction