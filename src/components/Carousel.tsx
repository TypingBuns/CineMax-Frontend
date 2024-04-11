"use client"

import Image from 'next/image'
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "tw-elements-react/dist/css/tw-elements-react.min.css";


import budda_jpg from "@/assets/budda.jpg"
import godzilla_jpg from "@/assets/godzilla.jpg"
import pogromocyduchow_jpg from "@/assets/pogromocyduchow.jpg"

import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselBasicExample(): JSX.Element {
  const slides = [
    {src: budda_jpg, 
    title: "BUDDA. DZIECIAK '98", 
    categories: "Dokumentalny",
    production: "Polska",
    time: "1h 23min",
    originalTitle: "BUDDA. DZIECIAK '98",
    year: "2024",
    description: "Film dokumentalny o życiu i dorobku jednego z najpopularniejszych polskich influencerów - Buddy.",},

    {src: godzilla_jpg,
    title: "GODZILLA I KONG: NOWE IMPERIUM",
    categories: "Akcja, Sci-Fi",
    production: "USA",
    time: "1h 55min",
    originalTitle: "Godzilla x Kong: The New Empire",
    year: "2024",
    description: "Kong broni Ziemi przed niezwykłymi i niebezpiecznymi stworzeniami."},

    {src: pogromocyduchow_jpg,
    title: "POGROMCY DUCHÓW: IMPERIUM LODU",
    categories: "Horror, Komedia, Sci-Fi",
    production: "USA",
    time: "1h 55min",
    originalTitle: "Ghostbusters: Frozen Empire",
    year: "2024",
    description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
  ]
  return (
    <div className='flex justify-center items-center w-3/5'>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] block justify-center">
          {slides.map((slide,index) =>(
            <TECarouselItem
            itemID={index+1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <Image
              src={slide.src}
              className="block w-full"
              alt="..."
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <div className='absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-cyan-900'>
            <h5 className="text-xl">{slide.title}</h5>
              <p>
                {slide.description}
              </p>
            </div>
              
            </div>

          </TECarouselItem>
            ))}
        </div>
      </TECarousel>
    </div>
  );
}