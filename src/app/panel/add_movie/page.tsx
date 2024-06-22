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
import { IoMdGlobe, IoMdImages, IoMdTime } from "react-icons/io";
import { PiBaby } from "react-icons/pi";
import { MyButton } from "@/components/common/MyButton";
const AddMovieForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFile2, setSelectedFile2] = useState<File | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      event.target.value = "";
      setSelectedFile(file);
    }
  };
  const handleFileChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      event.target.value = "";
      setSelectedFile2(file);
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
  const onClickEventAdd = () => console.log("Dodano film");

  return (
    <div className="flex justify-center items-center my-10">
      <div className="flex flex-col items-center space-y-5 w-[45rem] py-12 px-28 rounded-3xl bg-gray-800/45 shadow-blue-900 shadow-2xl">
        <div className="w-1/2">
          <Image className="scale-75" src={logo} alt={"cinemax logo"} />
        </div>
        <p className="font-semibold">Podaj dane potrzebne do dodania filmu</p>
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
              <input
                id="title"
                type="text"
                className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
              />
            </div>
            <div>
              <label
                className="flex flex-row gap-3 items-center text-white"
                htmlFor="originaltitle"
              >
                <MdOutlineSubtitles className="text-xl" />
                Oryginalny tytuł filmu
              </label>
              <input
                id="originaltitle"
                type="text"
                className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
              />
            </div>
            <div>
              <label
                className="flex flex-row gap-3 text-white"
                htmlFor="description"
              >
                <MdOutlineDescription className="text-xl" />
                Opis
              </label>
              <textarea
                id="description"
                className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
              ></textarea>
            </div>
            <div className="flex space-x-10">
              <div className="w-1/2">
                <label
                  className="flex flex-row gap-3 text-white"
                  htmlFor="date"
                >
                  <MdCalendarMonth className="text-xl" />
                  Data premiery
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
                  htmlFor="time"
                >
                  <IoMdTime className="text-xl" />
                  Czas trwania
                </label>
                <input
                  id="time"
                  type="time"
                  className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
                />
              </div>
            </div>
            <div className="flex space-x-10">
              <div>
                <label
                  className="flex flex-row gap-3 text-white"
                  htmlFor="hall"
                >
                  <IoMdGlobe className="text-xl" />
                  Kraj produkcji
                </label>
                <input
                  id="hall"
                  type="text"
                  className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
                />
              </div>
              <div>
                <label className="flex flex-row gap-3 text-white" htmlFor="age">
                  <PiBaby className="text-xl" />
                  Minimalny wiek
                </label>
                <input
                  id="age"
                  type="number"
                  className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
                />
              </div>
            </div>
            <div className="flex space-x-10">
              <div className="w-1/2">
                <label
                  className="flex flex-row gap-3 text-white"
                  htmlFor="genre"
                >
                  <MdMovie className="text-xl" />
                  Gatunek filmu
                </label>
                <select
                  id="genre"
                  className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
                >
                  <option value="Animowany">Animowany</option>
                  <option value="Komedia">Komedia</option>
                  <option value="Science-Fiction">Science-Fiction</option>
                  <option value="Akcja">Akcja</option>
                  <option value="Przygodowy">Przygodowy</option>
                  <option value="Dokumentalny">Dokumentalny</option>
                  <option value="Horror">Horror</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Dramat">Dramat</option>
                  <option value="Dokumentalny">Dokumentalny</option>
                </select>
              </div>
              <div className="w-1/2">
                <label
                  className="flex flex-row gap-3 text-white"
                  htmlFor="imageType"
                >
                  <MdScreenshotMonitor className="text-xl" />
                  Typ obrazu
                </label>
                <select
                  id="imageType"
                  className="mt-1 block w-full bg-gray-800 text-white border border-gray-700 rounded py-2 px-3"
                >
                  <option value="2D - napisy">2D - napisy</option>
                  <option value="2D - lektor">2D - lektor</option>
                  <option value="2D - dubbing">2D - dubbing</option>
                  <option value="3D - napisy">3D - napisy</option>
                  <option value="3D - lektor">3D - lektor</option>
                  <option value="3D - dubbing">3D - dubbing</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <label className="flex flex-row gap-3 text-white">
                  <IoMdImages className="text-xl" />
                  Plakat filmu
                </label>
                <div className="flex items-center space-x-4 mt-1">
                  {selectedFile ? (
                    <div className="flex flex-col items-center">
                      <div className="w-[200px] h-[285px] flex items-center justify-center">
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Wybrane zdjęcie"
                          className="border-gray-700 rounded-xl"
                        />
                      </div>
                      <div className="relative mt-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                        />
                        <button
                          type="button"
                          className="bg-white/80  text-custombgColor font-bold py-2 px-4 rounded cursor-pointer mb-4"
                        >
                          Dodaj zdjęcie
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-[200px] h-[285px] bg-gray-800 border-gray-700 flex justify-center items-center flex-col mt-1 rounded-xl">
                        <h2 className="text-sm">Brak wybranego zdjęcia</h2>
                        <h2 className="text-sm">(zalecany rozmiar:</h2>
                        <h2 className="text-sm">200 x 285 pikseli)</h2>
                      </div>
                      <div className="relative mt-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                        />
                        <button
                          type="button"
                          className="bg-white/80  text-custombgColor font-bold py-2 px-4 rounded cursor-pointer mb-4"
                        >
                          Dodaj zdjęcie
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="flex flex-row gap-3 text-white">
                  <IoMdImages className="text-xl" />
                  Baner filmu
                </label>
                <div className="flex items-center space-x-4 mt-1">
                  {selectedFile2 ? (
                    <div className="flex flex-col items-center">
                      <div className="w-[228px] h-[128.25px] flex items-center justify-center">
                        <img
                          src={URL.createObjectURL(selectedFile2)}
                          alt="Wybrane zdjęcie"
                          className="border-gray-700 rounded-xl"
                        />
                      </div>
                      <div className="relative mt-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange2}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                        />
                        <button
                          type="button"
                          className="bg-white/80  text-custombgColor font-bold py-2 px-4 rounded cursor-pointer mb-4"
                        >
                          Dodaj zdjęcie
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <div className="w-[228px] h-[128.25px] bg-gray-800 border-gray-700 flex justify-center items-center flex-col mt-1 rounded-xl">
                        <h2 className="text-sm">Brak wybranego zdjęcia</h2>
                        <h2 className="text-sm">(zalecany rozmiar:</h2>
                        <h2 className="text-sm">1280 x 720 pikseli)</h2>
                      </div>
                      <div className="relative mt-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange2}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                        />
                        <button
                          type="button"
                          className="bg-white/80  text-custombgColor font-bold py-2 px-4 rounded cursor-pointer mb-4"
                        >
                          Dodaj zdjęcie
                        </button>
                      </div>
                    </div>
                  )}
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
                Dodaj film
              </p>
            </MyButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
