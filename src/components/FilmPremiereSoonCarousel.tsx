"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import { useQuery } from "react-query";
import {
  GetMovieDataPremiereSoon,
  getMovieDetailsPremiereSoon,
} from "@/hooks/premieresoonmovies";
import LoadingScene from "./common/LoadingScene";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const formatDate = (dateString: string) => {
  // Tablica z nazwami miesięcy
  const months = [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia",
  ];

  // Tworzymy obiekt daty na podstawie ciągu znaków
  const date = new Date(dateString);

  // Pobieramy dzień, miesiąc i rok z obiektu daty
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Konstruujemy sformatowaną datę
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  // Zwracamy sformatowaną datę
  return formattedDate;
};

const Slider = () => {
  const {
    data: moviesData,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useQuery("moviespremieresoon", getMovieDetailsPremiereSoon);

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        className="carousel-button-group  gap-4 flex justify-center 
        items-center w-full"
      >
        <button
          className="block p-2 absolute top-0 bottom-1/3 left-0 rounded-full h-1/6 my-auto mx-3 border-4 border-custombgColor  bg-gray-400 transition-colors ease-out duration-500 hover:bg-rose-600"
          onClick={() => previous()}
        >
          {" "}
          <FiChevronLeft className="text-2xl" />
        </button>
        <button
          className="block p-2 absolute top-0 bottom-1/3 right-0 rounded-full h-1/6 my-auto mx-3 border-4 border-custombgColor bg-gray-400 transition-colors ease-out duration-500 hover:bg-rose-600"
          onClick={() => next()}
        >
          {" "}
          <FiChevronRight className="text-2xl" />
        </button>
      </div>
    );
  };
  return (
    <div className="w-3/4 items-center">
      {!moviesLoading &&
      !moviesError &&
      typeof moviesData !== "string" &&
      moviesData ? (
        <>
          <div className="w-3/12 flex-col p-5 text-center bg-custombgColor mx-auto rounded-t-3xl customShadow ">
            <h1 className="uppercase text-2xl font-bold">Zapowiedzi</h1>
            <p className="opacity-80">Nie przegap zbliżających się premier</p>
          </div>
          <div className="bg-custombgColor px-5 py-8 rounded-3xl customShadow ">
            <Carousel
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
              responsive={responsive}
              // autoPlay={true}
              swipeable={true}
              draggable={true}
              infinite={true}
              partialVisible={false}
            >
              {moviesData.map((slide, index) => (
                <div key={index} className="px-3">
                  <div className="relative ">
                    <div className="absolute w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 customBackGgGradient rounded-3xl backdrop-blur-[2px] transition-opacity ease-out duration-300">
                      <Link
                        href={slide.trailerLink}
                        target="_blank"
                        className="pr-3"
                      >
                        <span className="h-14 w-14 bg-gradient-to-tl from-gray-800 to-gray-500 rounded-full flex items-center justify-center pl-[0.33rem] hover:scale-125 transition-all ease-out duration-300">
                          <FaPlay className="text-2xl drop-shadow-[5px_5px_2px_rgba(0,0,0,0.35)]" />
                        </span>
                      </Link>
                    </div>
                    <Image
                      className="w-full rounded-3xl mb-4"
                      src={`data:image/png;base64,${slide.posterImage}`}
                      width={200}
                      height={286}
                      alt={slide.title}
                    />
                  </div>
                  <h1 className="pt-4 font-semibold">{slide.title}</h1>
                  <p className="text-sm opacity-60 pt-1 pb-4">
                    Od {formatDate(slide.releaseDate)}
                  </p>
                  <p className="text-sm opacity-60">
                    {slide.description.length > 125
                      ? slide.description.slice(0, 125) + "..."
                      : slide.description}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </>
      ) : (
        <div>
          <LoadingScene />
        </div>
      )}
    </div>
  );
};
export default Slider;
