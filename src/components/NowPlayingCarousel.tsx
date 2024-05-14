"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FaPlay } from "react-icons/fa";

import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { TECarousel, TECarouselItem } from "tw-elements-react";

import budda_jpg from "@/assets/budda.jpg";
import godzilla_jpg from "@/assets/godzilla.jpg";
import pogromocyduchow_jpg from "@/assets/pogromocyduchow.jpg";
import Link from "next/link";

import { GetMovieData, getMovieDetails } from "@/hooks/movie";
import { DiVim } from "react-icons/di";

export default function CarouselBasicExample(): JSX.Element {
  // const [movies, setMovies] = useState<GetMovieData[]>([]);

  // useEffect(() => {
  //   const fetchData= async () => {
  //     const result = await getMovieDetails();
  //     if (typeof result !== "string") {
  //       setMovies(result);
  //     }

  //   };

  //   fetchData();
  // }, []);

  const {
    data: moviesData,
    isLoading: moviesLoading,
    isError: moviesError,
  } = useQuery("movies", getMovieDetails);

  const theme = {
    prevBtn:
      "absolute bottom-0 left-0 top-0 z-30 ex w-[10%] items-center justify-center border-0 bg-none p0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubicbezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outlinenone focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motionreduce:transition-none",
    nextBtn:
      "absolute bottom-0 right-0 top-0 z-30 ex w-[10%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubicbezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outlinenone focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motionreduce:transition-none",
    prevBtnIcon: "inline-block h-8 w-8 [&>svg]:h-8",
    nextBtnIcon: "inline-block h-8 w-8 [&>svg]:h-8",
  };
  console.log("jeabc", moviesData);

  function formatDurationToHours(duration: number): string {
    const hours = Math.floor(duration / 60); // Oblicz godziny zaokrąglając w dół
    const minutes = duration % 60; // Oblicz resztę z dzielenia przez 60, aby uzyskać minuty
    return `${hours}h ${minutes}min`; // Zwróć sformatowaną długość filmu
  }
  function formatGenres(genres: string): string {
    // Podziel ciąg znaków na tablicę na podstawie przecinków i usuń nadmiarowe spacje z każdego elementu
    return genres
      .split(",")
      .map((genre) => genre.trim())
      .join(", ");
  }
  return (
    <div className="flex justify-center items-center w-3/5">
      {!moviesLoading &&
      !moviesError &&
      typeof moviesData !== "string" &&
      moviesData ? (
        <>
          <TECarousel
            theme={theme}
            showControls
            ride="carousel"
            interval={6000}
          >
            <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-[''] block justify-center rounded-3xl customShadow">
              <div className="absolute z-30 top-0 left-0 right-0 flex items-center justify-center">
                <h1 className="uppercase text-2xl font-bold py-3 px-8 bg-custombgColor rounded-b-3xl customShadow">
                  Teraz gramy
                </h1>
              </div>
              {moviesData.map((slide, index) => (
                <TECarouselItem
                  key={slide.id}
                  itemID={index + 1}
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                >
                  <Image
                    src={`data:image/png;base64,${slide.bannerImage}`}
                    className="block w-full"
                    alt="..."
                    width={1280}
                    height={720}
                  />
                  <div className="absolute w-full h-1/2 left-0 bottom-0 text-center text-white md:block bg-gradient-to-t from-custombgColor">
                    <div className="flex flex-row items-center pt-44 pl-28 ">
                      <Link
                        href={slide.trailerLink}
                        target="_blank"
                        className="pr-3 hover:scale-110 transition-all ease-out duration-300"
                      >
                        <span className="h-14 w-14 bg-gradient-to-tl from-rose-800 to-rose-500 rounded-full flex items-center justify-center pl-[0.33rem] ">
                          <FaPlay className="text-2xl drop-shadow-[5px_5px_2px_rgba(0,0,0,0.35)]" />
                        </span>
                      </Link>
                      <h5 className="text-4xl font-bold uppercase">
                        {slide.title}
                      </h5>
                    </div>
                    <div className="flex items-center flex-row pl-[7.2rem] pt-3 gap-4">
                      <p>{slide.originalTitle}</p>
                      <span className="h-5 w-1 bg-white/80 rounded-full"></span>
                      <p>{formatGenres(slide.categories)}</p>
                      <span className="h-5 w-1 bg-white/80 rounded-full"></span>
                      <p>{formatGenres(slide.country)}</p>
                      <span className="h-5 w-1 bg-white/80 rounded-full"></span>
                      <p>{slide.yearOfProduction}</p>
                      <span className="h-5 w-1 bg-white/80 rounded-full"></span>
                      <p>{formatDurationToHours(slide.duration)}</p>
                    </div>
                  </div>
                </TECarouselItem>
              ))}
            </div>
          </TECarousel>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
