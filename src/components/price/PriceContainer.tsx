import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGlasses } from "react-icons/fa";
import PriceCard from './PriceCard';
import { BsStars } from "react-icons/bs";

const PriceContainer = () => {
  return (
    <div className='bg-neutral-50/90  text-custombgColor p-10 w-3/4 rounded-3xl customShadowWhite flex flex-col'>
      <div className=' flex flex-col justify-center items-center mb-5'>
      <h1 className='uppercase font-bold text-4xl'>Cennik</h1>
        <div className='flex flex-row gap-1 items-center'>
      <IoLocationSharp />
          <p> Mickiewicza 13, Rzeszów</p>
        </div>
      </div>
      
      <div className='flex flex-col bg-neutral-50/90 rounded-2xl drop-shadow-xl border-2 border-custombgColor p-2 pl-3'>
      <h1 className='text-zinc-500 absolute left-0 top-0 pt-2 pl-3'>Repertuar codzienny</h1>
        
        <div className='flex flex-row w-full justify-between '>
          <div className='flex flex-col'>
            <div className='flex flex-col space-y-11 mt-[13.3vh] ml-6'>
              <p className='font-bold text-lg uppercase '> Bilet normalny</p>
              <p className='font-bold text-lg uppercase '> Bilet ulgowy</p>
              <p className='font-bold text-lg uppercase '> Bilet rodzinny 2 + 1*</p>
            </div>
            
          </div>
          <div className='flex space-x-5 w-5/6 justify-between p-8 pb-2'>
          <PriceCard payment="Zakup online" dates="Pon - Czw" price1="16,90" price2="14,90" price3="14,90"/>
          <PriceCard payment="Zakup online" dates="Pt - Nd" price1="17,90" price2="15,90" price3="15,90"/>
          <PriceCard payment="Stacjonarnie" dates="Pon - Czw" price1="19,90" price2="17,90" price3="17,90"/>
          <PriceCard payment="Stacjonarnie" dates="Pt - Nd" price1="20,90" price2="18,90" price3="18,90"/>
          </div>
        </div>

        <div className='flex flex-row w-full justify-between items-center '>
          <p className='font-bold text-lg uppercase ml-6'> Lucky 13</p>
          <div className='flex space-x-5 w-5/6 p-8'>
          <div className='flex flex-col items-center bg-neutral-50/90 rounded-2xl drop-shadow-2xl p-5 px-8'>
          <div className='mask flex w-[102vh] h-[6vh] bg-custombgColor/80 rounded-xl text-white justify-center items-center font-bold'>
                <p>12,90 PLN</p>
            </div>
          </div>
          </div>
        </div>

      </div>
      <div className='flex flex-row bg-custombgColor/80 rounded-2xl drop-shadow-xl p-5 my-5 text-white'>
        <div className='flex justify-start w-1/2'>
          <p className='flex items-center gap-3 text-sm'><BsStars className='text-3xl text-rose-500'/> Lucky 13 - dzień promocyjny trzynastego dnia każdego miesiąca </p>
        </div>
        
        <div className='flex justify-end w-1/2 space-x-8'>
        <p className='flex items-center gap-3 text-sm'><AiOutlineGlobal className='text-3xl'/> Opłata internetowa - 0,50 zł/bilet</p>
        <p className='flex items-center gap-3 text-sm'><FaGlasses className='text-3xl'/> Opłata za okulary 3D - 3,00 zł/bilet</p>
        </div>
      </div>

      <p className='flex text-zinc-500 text-sm justify-end'>* Cena podana na etykiecie obowiązuję każdego członka rodziny.</p>
      
    </div>
  )
}

export default PriceContainer