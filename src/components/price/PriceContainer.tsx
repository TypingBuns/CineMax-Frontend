import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGlasses } from "react-icons/fa";
import PriceCard from './PriceCard';

const PriceContainer = () => {
  return (
    <div className='bg-neutral-50/90  text-custombgColor p-10 w-3/4 rounded-3xl customShadowWhite flex flex-col'>
      <div className=' flex flex-col justify-center items-center mb-5'>
      <h1 className='uppercase font-bold text-3xl'>Cennik</h1>
        <div className='flex flex-row gap-1 items-center'>
      <IoLocationSharp />
          <p> Mickiewicza 13, Rzeszów</p>
        </div>
      </div>
      
      <div className='flex flex-row w-full justify-between bg-neutral-50/90 rounded-2xl drop-shadow-lg pt-3 pl-4 pb-8 px-5 my-5 border-2 border-custombgColor'>
        <div className='flex flex-col'>
          <h1 className='text-zinc-500'>Repertuar codzienny</h1>
          <div className='flex flex-col space-y-11 pt-[9.5vh]'>
            <p className='font-bold text-lg uppercase pl-4'> Bilet normalny</p>
            <p className='font-bold text-lg uppercase pl-4'> Bilet ulgowy</p>
            <p className='font-bold text-lg uppercase pl-4'> Bilet rodzinny 2 + 1*</p>
          </div>
          
        </div>
        <div className='flex space-x-5 px-3 pt-5 w-5/6'>
        <PriceCard payment="Zakup online" dates="Pon - Czw" price1="16,90" price2="14,90" price3="14,90"/>
        <PriceCard payment="Zakup online" dates="Pt - Nd" price1="17,90" price2="15,90" price3="15,90"/>
        <PriceCard payment="Stacjonarnie" dates="Pon - Czw" price1="19,90" price2="17,90" price3="17,90"/>
        <PriceCard payment="Stacjonarnie" dates="Pt - Nd" price1="20,90" price2="18,90" price3="18,90"/>
        </div>

      </div>

      <div className='flex flex-row justify-end bg-custombgColor/80 rounded-2xl drop-shadow-xl p-5 my-5 space-x-8 text-white'>
        <p className='flex items-center gap-3 text-sm'><AiOutlineGlobal className='text-3xl'/> Opłata internetowa - 0,50 zł/bilet</p>
        <p className='flex items-center gap-3 text-sm'><FaGlasses className='text-3xl'/> Opłata za okulary 3D - 3,00 zł/bilet</p>
      </div>

      <p className='flex text-zinc-500 text-sm justify-end'>* Cena podana na etykiecie obowiązuję każdego członka rodziny.</p>
      
    </div>
  )
}

export default PriceContainer