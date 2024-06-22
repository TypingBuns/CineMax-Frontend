"use client";

import { MyButton } from "@/components/common/MyButton";
import React from "react";

const page = () => {
  const onClickEventAdd = () =>
    (window.location.href = "/panel/add_to_repertoire");
  const onClickEventAddMovie = () =>
    (window.location.href = "/panel/add_movie");
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex flex-col items-center space-y-5 w-[45rem] py-12 px-28 rounded-3xl bg-gray-800/45 shadow-blue-900 shadow-2xl">
        <h1 className="text-2xl font-bold pb-4">Wybierz sekcje</h1>
        <div className="flex flex-row gap-5">
          <MyButton
            className="px-4 py-2 font-medium flex items-center space-x-2.5"
            onClick={onClickEventAddMovie}
          >
            <p className="group-hover:text-red-700 group-hover:font-bold duration-100">
              Dodaj film do bazy
            </p>
          </MyButton>
          <MyButton
            className="px-4 py-2 font-medium flex items-center space-x-2.5"
            onClick={onClickEventAdd}
          >
            <p className="group-hover:text-red-700 group-hover:font-bold duration-100">
              Dodaj repertuar
            </p>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default page;
