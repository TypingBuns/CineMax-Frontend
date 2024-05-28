'use client'
import React from 'react'
import { ButtonWithDate } from './ButtonWithDate'
import RepertoireContainer from './RepertoireContainer';

const onClickEvent = (day: number) => {
    console.log("Zamiana repertuaru na:",day);
}

const days = Array(7).fill(0);

const RepertoireHeader = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-8'>
      <div className='bg-gradient-to-tl from-rose-800 to-rose-500 w-3/5 rounded-3xl customShadow justify-center items-center flex flex-col'>
        <div className=' flex flex-col justify-center items-center my-5'>
            <h1 className='uppercase font-bold text-4xl'>Repertuar</h1>
            <div className='flex flex-row gap-2 items-center '>
                <p className='uppercase font-bold'>Aktualnie gramy</p>
                <p>-</p>
                <p> Mickiewicza 13, Rzeszów</p>
            </div>
        </div>
        <div className='flex  justify-between items-center w-full p-5 pt-0 '>
          <div className='flex flex-col w-full justify-start items-start pt-5 h-[50%]'>
            <p className='px-4 pt-4 bg-neutral-50/90 rounded-t-3xl customShadowWhite text-custombgColor font-medium'>Wybierz dzień seansu</p>
            <div className='flex flex-row bg-neutral-50/90 w-5/6 rounded-r-3xl rounded-b-3xl customShadowWhite justify-center items-center  gap-2 p-3'>
              {days.map((item, index) => {
                return (
                    <ButtonWithDate
                      key={index}
                      dayOffset={index}
                      onClick={() => onClickEvent(index)}
                    >
                    </ButtonWithDate>
                  );
              })}
            </div>
            <p className='pt-4 pl-1 text-sm text-neutral-50/80'>Aktualizacja repertuaru co tydzień w czwartek o godz. 17:00</p>
          </div>
          <div className='flex flex-col w-1/5 justify-center items-center bg-neutral-50/90 rounded-3xl customShadowWhite mb-6 py-2'>
          <p className='px-4 pt-4 customShadowWhite text-custombgColor font-medium items-center'>Wybierz gatunek</p>
          <div className='flex flex-row w-full rounded-b-3xl customShadowWhite justify-center items-center  gap-2 p-3'>
          <select className='py-5 text-white p-2 appearance-none drop-shadow-2xl rounded-2xl bg-rose-700 hover:text-custombgColor hover:bg-neutral-50/90 hover:border-custombgColor border-2 ease-out duration-300' id="dropdown">
            <option value="">Pokaż wszystkie</option>
            <option value="option1">Science-Fiction</option>
            <option value="option2">Komedia</option>
            <option value="option3">Akcja</option>
          </select>
          </div>
          </div>
        </div>
       </div>
       <RepertoireContainer date="0" type="aaa"/>
      </div>
  )
}

export default RepertoireHeader