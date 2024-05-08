'use client'
import React from 'react'
import { ButtonWithDate } from './ButtonWithDate'

const onClickEvent = () => {
    console.log("zmien repertuar");
  }
const RepertoireContainer = () => {
  return (
        <div className='bg-gradient-to-tl from-rose-800 to-rose-500 w-3/5 rounded-3xl customShadow justify-center items-center flex flex-col'>
        <div className=' flex flex-col justify-center items-center my-5'>
            <h1 className='uppercase font-bold text-4xl'>Repertuar</h1>
            <div className='flex flex-row gap-2 items-center '>
                <p className='uppercase font-bold'>Aktualnie gramy</p>
                <p>-</p>
                <p> Mickiewicza 13, Rzeszów</p>
            </div>
        </div>
        <div className='flex  justify-between items-center w-full p-5'>
          <div className='flex flex-col w-full justify-start items-start'>
            <p className='px-4 pt-4 bg-neutral-50/90 rounded-t-3xl customShadowWhite text-custombgColor font-medium'>Wybierz dzień seansu</p>
            <div className='flex flex-row bg-neutral-50/90 w-5/6 rounded-r-3xl rounded-b-3xl customShadowWhite justify-center items-center  gap-2 p-3'>
            <ButtonWithDate
            dayOffset={0}
            onClick={onClickEvent}>
            </ButtonWithDate>
            <ButtonWithDate
            dayOffset={1}
            onClick={onClickEvent}>
            </ButtonWithDate>
            <ButtonWithDate
            dayOffset={2}
            onClick={onClickEvent}>
            </ButtonWithDate>
            <ButtonWithDate
            dayOffset={3}
            onClick={onClickEvent}>
            </ButtonWithDate>
            <ButtonWithDate
            dayOffset={4}
            onClick={onClickEvent}>
            </ButtonWithDate>
            <ButtonWithDate
            dayOffset={5}
            onClick={onClickEvent}>
            </ButtonWithDate>
            <ButtonWithDate
            dayOffset={6}
            onClick={onClickEvent}>
            </ButtonWithDate>
            <ButtonWithDate
            dayOffset={7}
            onClick={onClickEvent}>
            </ButtonWithDate>
            </div>
            <p>Aktualizacja repertuaru </p>
          </div>
          <div className='flex flex-col'>
          <p className='px-4 pt-4 bg-neutral-50/90 rounded-t-3xl customShadowWhite text-custombgColor font-medium'>Wybierz gatunek</p>
          <div className='flex flex-row bg-neutral-50/90 w-4/6 rounded-r-3xl rounded-b-3xl customShadowWhite justify-center items-center  gap-2 p-3 text-custombgColor'>
          <select id="dropdown">
            <option value="">Pokaż wszystkie</option>
            <option value="option1">Science-Fiction</option>
            <option value="option2">Komedia</option>
            <option value="option3">Akcja</option>
          </select>
          </div>
          </div>
        </div>
        </div>
  )
}

export default RepertoireContainer