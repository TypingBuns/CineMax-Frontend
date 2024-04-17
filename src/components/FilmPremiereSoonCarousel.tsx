"use client"

import React from "react";
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';

import backtoblack_poster_jpg from "@/assets/premiere-soon/back-to-black.jpg";
import abigail_poster_jpg from "@/assets/premiere-soon/abigail.jpg";
import niepokalana_poster_jpg from "@/assets/premiere-soon/niepokalana.jpg";
import mojpiesartur_poster_jpg from "@/assets/premiere-soon/moj-pies-artur.jpg";
import kiciakocia_poster_jpg from "@/assets/premiere-soon/kicia-kocia.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderPremiere = [
  {
    src: backtoblack_poster_jpg,
    title: "Back to Black. Historia Amy Winehouse",
    dateofpremiere: "19 kwiecien 2024",
    description: "Back to Black to dramat biograficzny z 2024 roku oparty na życiu brytyjskiej piosenkarki i autorki tekstów Amy Winehouse, granej przez Marisę Abelę.",
  },
  {
    src: abigail_poster_jpg,
    title: "Abigail",
    dateofpremiere: "19 kwiecien 2024",
    description: "12-letnia baletnica, która jest córką wpływowej postaci ze świata przestępczego zostaje porwana. Aby otrzymać okup w wysokości 50 milionów dolarów grupa przestępców musi pilnować dziewczynkę w odizolowanej rezydencji przez jedną noc.",
  },
  {
    src: mojpiesartur_poster_jpg,
    title: "Mój pies Artur",
    dateofpremiere: "26 kwiecien 2024",
    description: "Miłośnik sportu i adrenaliny Michael Light (Mark Wahlberg) staje przed największym wyzwaniem w dotychczasowej karierze. Wraz z trzyosobową ekipą zaufanych zawodników przystępuje do Mistrzostw Świata w Rajdach Przygodowych na Dominikanie.",
  },
  {
    src: niepokalana_poster_jpg,
    title: "Niepokalana",
    dateofpremiere: "26 kwiecien 2024",
    description: "Gdy młoda zakonnica odkrywa, że jest w ciąży, w jej klasztorze zaczyna się mówić o cudzie. Wkrótce zaczyna ona jednak podejrzewać, że została wybrana do wypełnienia misji, która może doprowadzić ją do zguby.",
  },
  {
    src: kiciakocia_poster_jpg,
    title: "Kicia Kocia w przedszkolu",
    dateofpremiere: "26 kwiecien 2024",
    description: "Odważna, ciekawska kotka wyrusza razem z przyjaciółmi na spotkanie przygody i odkrywa otaczający ją barwny świat, ucząc się przy tym ważnych rzeczy.",
  },
]
const Slider = () => {
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group  gap-4 flex justify-center 
        items-center w-full">
          <button className='block p-3 bg-gray-300 absolute top-0 bottom-1/3 left-0 rounded-full h-1/6 my-auto mx-3 border-4 border-custombgColor' onClick={() => previous()}> <FiChevronLeft /></button>
          <button className='block p-3 bg-slate-300 absolute top-0 bottom-1/3 right-0 rounded-full h-1/6 my-auto mx-3 border-4 border-custombgColor' onClick={() => next()}> <BiChevronRight /></button>
       </div>
    
     );
   };
  return (
    <div className="w-3/4 items-center">
      <div className="w-3/12 flex-col p-5 text-center bg-custombgColor mx-auto rounded-t-3xl customShadow ">
      <h1 className="uppercase text-2xl font-bold">Zapowiedzi</h1>
      <p className="opacity-80">Nie przegap zbliżających się premier</p>
      </div>
      <div className="bg-custombgColor px-5 py-8 rounded-3xl customShadow ">
      <Carousel
        arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        // autoPlay={true}
        swipeable={true}
        draggable={true}
        infinite={true}
        partialVisible={false}
        
      >
        {sliderPremiere.map((slide, index) => (

            <div key={index} className="px-3">
              <Image
              className="w-full rounded-3xl mb-4"
              src={slide.src}
              width={200}
              height={286}
              alt={slide.title}
              />
              <h1 className="pt-4 font-semibold">{slide.title}</h1>
              <p className="text-sm opacity-60 pt-1 pb-4">Od {slide.dateofpremiere}</p>
              <p className="text-sm opacity-60">{slide.description.length > 105 ? slide.description.slice(0,105) + '...' : slide.description}</p>
            </div>
        )
        )}
      </Carousel>
      </div>
    </div>
  );
};
export default Slider;