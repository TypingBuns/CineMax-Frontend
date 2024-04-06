"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel({children: slides}){
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() =>{
        const slideInterval = setInterval(next, 6000)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className='overflow-hidden relative max-w-5xl mx-auto my-10 rounded-3xl shadow-2xl drop-shadow-2xl'>
            
            <div className='flex transition-transform ease-in-out duration-1000' style={{transform: `translateX(-${curr*100}%)`}}>{slides}</div>
            <div className='absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-customBackColor'></div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev}>
                <FaArrowLeft className="text-4xl "/>
                </button>
                <button onClick={next}>
                <FaArrowRight className="text-4xl"/>
                </button>
            </div>
            
            {/* <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_,i) => (
                        <div className={`
                        transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}
                        `}></div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}