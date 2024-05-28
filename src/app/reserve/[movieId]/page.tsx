'use client'
import Image from "next/image";
import budda from "@/assets/budda_poster.jpg";
import React, {useEffect, useState} from "react";
import MovieSeats from "@/components/Reserve/MovieSeats";

type Props = {
  params: { movieId: string };
  searchParams: { time: string };
}

const ReserveSubmit = () => {
  return (
    <button
      className={`w-min px-4 py-2 bg-red-600 rounded-full shadow-secondary-900 shadow-md h-min text-gray-200 text-nowrap hover:bg-red-700 duration-100`}>
      Zarezerwuj miejsca
    </button>
  );
}

const ChoosenSeats = (
  {
    rows,
  } : {
    rows?:number[][],
  }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-min py-2 px-12 bg-red-500 shadow-md shadow-secondary-900 rounded-xl">
      <p className="text-gray-200 text-lg font-semibold text-nowrap">Wybrano(rząd-miejsce):</p>
      {
        rows?.map((row, rowIndex) => {
          if (row.includes(1)) return (
            <div key={rowIndex} className={`flex gap-x-2 text-gray-200 text-sm`} >
              {
                row.map((col, colIndex) => {
                  if (col === 1) return <p key={colIndex} className={`text-nowrap`}>{`${rowIndex+1}-${colIndex+1}`}</p>;
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}

const Legend = () => {
  return (
    <div className={`flex flex-col gap-1`}>
      <p className="text-md font-semibold text-primary-800">LEGENDA</p>
      <div className={`flex w-full gap-6`}>
        <LegendSeat description={'Zajęte'} color={'bg-secondary-700'}/>
        <LegendSeat description={'Wolne'} color={'bg-primary-800'}/>
        <LegendSeat description={'Wybrane'} color={'bg-gray-100'}/>
      </div>
    </div>
  );
}

const InfoBox = ({ row1, row2 } : { row1: string, row2: string }) => {
  return (
    <div className="flex flex-col gap-y-4 w-64 text-nowrap">
      <p className="bg-primary-700 text-xl text-center font-semibold py-2 rounded-tl-3xl rounded-br-3xl">{row1}</p>
      <p className="bg-primary-700 text-xl text-center font-semibold py-2 rounded-tl-3xl rounded-br-3xl">{row2}</p>
    </div>
  )
}

const LegendSeat = ({description, color} : {description: string, color: string}) => {
  return (
    <div className="flex gap-x-1">
      <div
        className="flex flex-col min-w-12 size-12 gap-[1px]"
      >
        <div className="flex gap-[1px] h-full">
          <div className={`${color} w-4 h-[80%] rounded-t-md self-end border-[1px] border-black`} />
          <div className={`${color} w-full h-full rounded-t-lg border-[1px] border-black`} />
          <div className={`${color} w-4 h-[80%] rounded-t-md self-end border-[1px] border-black`} />
        </div>
        <div className={`${color} h-3 w-full rounded-b-lg border-[1px] border-black`}/>
      </div>
      <p className="text-primary-700 text-sm font-semibold self-center">{description}</p>
    </div>
  )
}

const Reserve = (props: Props) => {

  const [rows, setRows] = useState<number[][]>(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  );

  // const [rows, setRows] = useState<number[][]>(Array(8).fill([]).map(() => new Array(8).fill(0)))

  const handleSeatChange = (row: number, col: number) => {
    row -= 1;
    col -= 1;
    const newState = [...rows];
    if (newState[row][col] === -1) return;
    else if (newState[row][col] === 1) newState[row][col] = 0;
    else newState[row][col] = 1;
    setRows(newState);
  }

  const movie = {id: 1,
    poster: "/assets/budda_poster.jpg",
    title: "Budda. Dzieciak '98",
    categories: "Dokumentalny",
    production: "Polska",
    duration: 83,
    originalTitle: "BUDDA. DZIECIAK '98",
    year: "2024",
    description: "Film dokumentalny o życiu i dorobku jednego z najpopularniejszych polskich influencerów - Buddy.",
    trailerLink: "https://www.youtube.com/watch?v=fLB8tg1QcJQ",}

  return (
    <div className="flex flex-col gap-y-5 w-[80%] my-8 mx-auto">
      <div className="flex gap-x-6 bg-gray-200 rounded-xl shadow-md shadow-white py-5 px-10">
        <div className='relative flex justify-center items-center ml-3 '>
          <Image
            className='rounded-3xl drop-shadow-2xl shadow-blue-900 shadow-lg'
            src={budda}
            width={160}
            height={228}
            alt={movie.title}
          />
        </div>
        <div className="flex flex-col justify-between gap-y-5 w-full">
          <div className="flex justify-between p-4">
            <p className="text-blue-800 text-4xl font-semibold">Civil War / 2D / DUBBING</p>
            <p className="text-blue-800 font-medium self-end drop-shadow-md">Dramat, akcja</p>
            <p className="px-3 py-1 bg-red-600 h-min rounded-md self-end">PREMIERA</p>
          </div>
          <hr className="shadow-[0_6px_12px_1px_#330066] bg-primary-700 h-[4px]"></hr>
          <div className="flex justify-between">
            <InfoBox row1={'CineMaX Rzeszów'} row2={'SALA 1'}/>
            <InfoBox row1={'23.06.2024'} row2={`godz. ${props.searchParams.time}`}/>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 bg-gray-200 rounded-xl shadow-md shadow-white p-6">
        <div className={`h-4 bg-secondary-800 w-[80%]`}/><p className={`text-primary-800 font-bold`}>EKRAN</p>
        <MovieSeats rows={rows} handleSeatChange={handleSeatChange} />
        <div className={`w-full h-[1.5px] bg-secondary-600 self-center`}/>
        <div className={`flex flex-col xl:flex-row w-full justify-between items-center gap-y-4`} >
          <Legend />
          <ChoosenSeats rows={rows}/>
          <ReserveSubmit />
        </div>
      </div>
    </div>
  )
}

export default Reserve;