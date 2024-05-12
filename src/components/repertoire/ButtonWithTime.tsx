import React from 'react'

interface ButtonProps {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    time?: string;
  }
  
  export function ButtonWithTime({ className, onClick, time }: ButtonProps) {
    return (
      <button className={`bg-neutral-50/90 w-1/6 p-1 h-full py-5 rounded-2xl hover:text-white hover:bg-custombgColor/80  border-neutral-300/90 hover:border-custombgColor/5 border-2 ease-out duration-300 ${className}`} onClick={onClick}>
        <p className='font-semibold'>{time}</p>
      </button>
    );
  }