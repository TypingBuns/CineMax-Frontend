import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const LoadingScene = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-12 bg-custombgColor p-10 customShadow rounded-3xl">
      <div className="loader"></div>
      <p className="font-medium text-lg">Ładowanie danych...</p>
    </div>
  );
};

export default LoadingScene;
