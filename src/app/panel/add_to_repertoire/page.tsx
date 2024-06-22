"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo/cinemax-logo.png";
import {
  MdCalendarMonth,
  MdMovie,
  MdOutlineDescription,
  MdOutlineLocationOn,
  MdOutlineSubtitles,
  MdScreenshotMonitor,
} from "react-icons/md";
import { IoMdImages, IoMdTime } from "react-icons/io";
import { PiBaby } from "react-icons/pi";
import { MyButton } from "@/components/common/MyButton";
const CinemaForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      event.target.value = "";
      setSelectedFile(file);
    }
  };
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
  const toggleTimeSelection = (time: string) => {
    setSelectedTimes((prevSelectedTimes) =>
      prevSelectedTimes.includes(time)
        ? prevSelectedTimes.filter((t) => t !== time)
        : [...prevSelectedTimes, time]
    );
  };
  const onClickEventAdd = () => console.log("Dodano seans");
  const times = [
    "9:30",
    "11:30",
    "13:30",
    "16:00",
    "18:30",
    "20:30",
    "21:30",
    "22:30",
  ];
  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex flex-col items-center space-y-5 w-[45rem] py-12 px-28 rounded-3xl bg-gray-800/45 shadow-blue-900 shadow-2xl">
        <div className="w-1/2">
          <Image className="scale-75" src={logo} alt={"cinemax logo"} />
        </div>
        <p className="font-semibold">Podaj dane potrzebne do dodania seansu</p>
        <form>
          <div className="space-y-4">
            <div>
              <label
                className="flex flex-row gap-3 items-center text-white"
                htmlFor="title"
              >
                <MdOutlineSubtitles className="text-xl" />
                Tytuł filmu
              </label>
              <select
                id="title"
                className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
                size={5}
              >
                <option value="Garfield">Garfield</option>
                <option value="Kaskader">Kaskader</option>
                <option value="Challengers">Challengers</option>
                <option value="Back to black. Historia Amy Winehouse">
                  Back to black. Historia Amy Winehouse
                </option>
                <option value="Mój pies Artur">Mój pies Artur</option>
                <option value="Supersiostry">Supersiostry</option>
                <option value="Istoty fantastyczne">Istoty fantastyczne</option>
                <option value="Niepokalana">Niepokalana</option>
                <option value="Spy x Family Code: White">
                  Spy x Family Code: White
                </option>
                <option value="Królestwo Planety Małp">
                  Królestwo Planety Małp
                </option>
                <option value="Furiosa: Saga Mad Max">
                  Furiosa: Saga Mad Max
                </option>
                <option value="W głowie się nie mieści 2">
                  W głowie się nie mieści 2
                </option>
                <option value="Hit Man">Hit Man</option>
                <option value="Jedno życie">Jedno życie</option>
                <option value="Do usług szanownej pani">
                  Do usług szanownej pani
                </option>
                <option value="Deadpool & Wolverine">
                  Deadpool & Wolverine
                </option>
                <option value="Mój syn Ezra">Mój syn Ezra</option>
                <option value="Horyzont. Rozdział 1">
                  Horyzont. Rozdział 1
                </option>
                <option value="Gru i Minionki: Pod Przykrywką">
                  Gru i Minionki: Pod Przykrywką
                </option>
                <option value="Borderlands">Borderlands</option>
                <option value="Transformers: Początek">
                  Transformers: Początek
                </option>
                <option value="Bulion i inne namiętości">
                  Bulion i inne namiętości
                </option>
                <option value="Joker: Folie à deux">Joker: Folie à deux</option>
                <option value="Leonardo. Odkrywca">Leonardo. Odkrywca</option>
              </select>
            </div>
            <div className="flex space-x-10">
              <div className="w-1/2">
                <label
                  className="flex flex-row gap-3 text-white"
                  htmlFor="date"
                >
                  <MdCalendarMonth className="text-xl" />
                  Data seansu
                </label>
                <input
                  id="date"
                  type="date"
                  className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
                />
              </div>
              <div className="w-1/2">
                <label
                  className="flex flex-row gap-3 text-white"
                  htmlFor="hall"
                >
                  <MdOutlineLocationOn className="text-xl" />
                  Sala seansu
                </label>
                <select
                  id="sala"
                  className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
                >
                  <option value="sala 1">1</option>
                  <option value="sala 2">2</option>
                  <option value="sala 3">3</option>
                  <option value="sala 4">4</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="w-full">
                <label className="block text-white">Godziny seansów</label>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => toggleTimeSelection(time)}
                      className={`py-1 px-2 rounded ${
                        selectedTimes.includes(time)
                          ? "bg-white/80 text-custombgColor"
                          : "bg-gray-700 text-white"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <MyButton
              className="px-4 py-2 font-medium flex items-center space-x-2.5 bg-green-600 hover:shadow-success-500"
              onClick={onClickEventAdd}
              type="submit"
            >
              <p className="group-hover:text-green-600 group-hover:font-bold duration-100">
                Dodaj seans
              </p>
            </MyButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CinemaForm;
