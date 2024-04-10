"use client"

import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image'


export default function Carousel(){
// export default function Carousel({children: slides}){

    const properties = {
    width: 1280,
    height: 720
    }
    const slides = [
        {src: "/budda.jpg", 
        title: "BUDDA. DZIECIAK '98", 
        categories: "Dokumentalny",
        production: "Polska",
        time: "1h 23min",
        originalTitle: "BUDDA. DZIECIAK '98",
        year: "2024",
        description: "Film dokumentalny o życiu i dorobku jednego z najpopularniejszych polskich influencerów - Buddy.",},

        {src: "/godzilla.jpg",
        title: "GODZILLA I KONG: NOWE IMPERIUM",
        categories: "Akcja, Sci-Fi",
        production: "USA",
        time: "1h 55min",
        originalTitle: "Godzilla x Kong: The New Empire",
        year: "2024",
        description: "Kong broni Ziemi przed niezwykłymi i niebezpiecznymi stworzeniami."},

        {src: "/pogromocyduchow.jpg",
        title: "POGROMCY DUCHÓW: IMPERIUM LODU",
        categories: "Horror, Komedia, Sci-Fi",
        production: "USA",
        time: "1h 55min",
        originalTitle: "Ghostbusters: Frozen Empire",
        year: "2024",
        description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
        {src: "/pogromocyduchow.jpg",
        title: "POGROMCY DUCHÓW: IMPERIUM LODU",
        categories: "Horror, Komedia, Sci-Fi",
        production: "USA",
        time: "1h 55min",
        originalTitle: "Ghostbusters: Frozen Empire",
        year: "2024",
        description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
        {src: "/pogromocyduchow.jpg",
        title: "POGROMCY DUCHÓW: IMPERIUM LODU",
        categories: "Horror, Komedia, Sci-Fi",
        production: "USA",
        time: "1h 55min",
        originalTitle: "Ghostbusters: Frozen Empire",
        year: "2024",
        description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
        {src: "/pogromocyduchow.jpg",
        title: "POGROMCY DUCHÓW: IMPERIUM LODU",
        categories: "Horror, Komedia, Sci-Fi",
        production: "USA",
        time: "1h 55min",
        originalTitle: "Ghostbusters: Frozen Empire",
        year: "2024",
        description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
    ]
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() =>{
        const slideInterval = setInterval(next, 6000)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className='overflow-hidden relative max-w-5xl mx-auto my-10 rounded-3xl shadow-2xl drop-shadow-2xl'>
            {/* <div className='flex transition-transform ease-in-out duration-1000' style={{transform: `translateX(-${curr*100}%)`}}>{slides.map((s) =>(<img src={s.src}/>))}</div> */}
            
            <div className='flex transition-transform ease-in-out duration-1000' style={{transform: `translateX(-${curr*100}%)`}}>
            {/* {slides.map((s) =>(
                <Image
                    src={s.src}
                    width={properties.width}
                    height={properties.height}
                    alt={s.title}
                />
            ))} */}
            </div>

            {/* <div className='flex transition-transform ease-in-out duration-1000' style={{transform: `translateX(-${curr*100}%)`}}>
                
                <div className='flex flex-row' style={{width: `${(properties.width.toString())*3}px` , height: 'auto'}}>
                {slides.map((s) =>(
                        // <div className='relative'>
                        <img
                        src={s.src}
                        width={properties.width}
                        height={properties.height}
                        alt={s.title}
                        // />
                
                        <div className='absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-customBackColor'></div>
                        <p className='absolute bottom-0 left-0 w-[1280px]' style={{transform: `translateX(-${curr*100}%)`}}>{s.title}</p>
                        // </div>
                    ))}
                    </div>
            </div> */}

            <div className='flex transition-transform ease-in-out duration-1000' style={{transform: `translateX(-${curr*100}%)`}}>
                <div className=' flex relative'>
                {slides.map((s,index) =>(
                <>

                <Image
                    src={s.src}
                    width={properties.width}
                    height={properties.height}
                    alt={s.title}
                />
                <p className='absolute left-0 bottom-0 z-50' style={{width: `${(properties.width)*3}px`}} >{s.title}</p>
                </>
            ))}
                <div className='absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-customBackColor' style={{width: `${(properties.width)*3}px`}}></div>
                <div className='absolute bottom-0 left-0 flex '>
                {/* {slides.map((s) =>(
                
                ))}     */}
                </div>
                </div>


            </div>

            {/* //chat wyplul
            <div className='flex transition-transform ease-in-out duration-1000' style={{transform: `translateX(-${curr*100}%)`}}>
            <div className='grid grid-cols-1' style={{ gridTemplateColumns: `repeat(${slides.length}, ${properties.width}px)` }}>
            {slides.map((s, index) => (
            <div key={index} className='relative'>
                <Image
                src={s.src}
                width={properties.width}
                height={properties.height}
                alt={s.title}
                />
                <div className='absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-customBackColor'></div>
                <p className='absolute bottom-3 left-2 p-4 flex'>{s.title}</p>
            </div>
            ))}
            </div>
            </div> */}
            
            {/* <div className='absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-customBackColor'></div> */}
            {/* <div className='flex transition-transform ease-in-out duration-1000 max-w-5xl' style={{transform: `translateX(-${curr*100}%)`}}>
            {slides.map((s) =>(
                <p>{s.title}</p>
            ))}
            </div> */}
            

            {/* <div className='absolute left-0 bottom-0 flex p-4'>
            {slides.map((s) =>(
                <p>{s.title}</p>
            ))}
            </div> */}
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