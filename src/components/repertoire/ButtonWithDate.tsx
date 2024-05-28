import React, { useState } from 'react';

function getDate(offset: number = 0) {
    const today = new Date();
    today.setDate(today.getDate() + offset);
    const day = today.getDate();
    const monthNames = [
      "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca",
      "lipca", "sierpnia", "września", "października", "listopada", "grudnia"
    ];
    const monthIndex = today.getMonth();
    const month = monthNames[monthIndex];

      return `${day} ${month}`;
  }
  function getDayOfWeek(offset: number = 0){
    const today = new Date();
    today.setDate(today.getDate() + offset);
    const dayNames = [
      "Ndz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."
    ];
    const dayIndex = today.getDay();
    const dayOfWeek = dayNames[dayIndex];
    if(offset==0){
        return "Dzisiaj"
      }
    if(offset==1){
        return "Jutro"
      }
    else{
        return `${dayOfWeek}`
      }
  }

interface ButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  dayOffset?: number;
}

export function ButtonWithDate({ className, onClick, dayOffset }: ButtonProps) {
    const [currentDate, setCurrentDate] = useState(getDate(dayOffset));
    const [currentDayOfWeek, setCurrentDayOfWeek] = useState(getDayOfWeek(dayOffset));
  return (
    <button
      className={`bg-rose-700 w-full h-full p-2  rounded-2xl hover:text-custombgColor hover:bg-neutral-50/90 hover:drop-shadow-2xl hover:border-custombgColor border-2 ease-out duration-300 ${className}`}
      onClick={onClick}
    >
      <p className='font-semibold'>{currentDayOfWeek}</p>
      <p className='text-sm'>{currentDate}</p>
    </button>
  );
}