import React from "react";
import Image from "next/image";
import budda from "@/assets/budda_poster.jpg";
import { ButtonWithTime } from "./ButtonWithTime";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";

const onClickEvent = (time: string) => {
  window.location.href = `/reserve`;
};

interface RepertoireOnceProps {
  id: number;
  title: string;
  categories: string;
  duration: number;
  description: string;
  trailerLink: string;
  poster: any;
}

const RepertoireOnce: React.FC<RepertoireOnceProps> = ({
  id,
  title,
  categories,
  duration,
  description,
  trailerLink,
  poster,
}: RepertoireOnceProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-row bg-neutral-50/90 w-3/4 h-[16rem] text-custombgColor mx-20 rounded-3xl drop-shadow-2xl">
      <div className="relative flex justify-center items-center ml-3 ">
        <Image
          className="rounded-3xl drop-shadow-2xl"
          src={poster}
          width={200}
          height={285}
          alt={title}
        />
        <div className="absolute w-1/4 h-full flex top-[70%] left-[60%]">
          <Link href={trailerLink} target="_blank" className="pr-3">
            <span className="h-12 w-12 bg-gradient-to-tl from-rose-800 to-rose-500 rounded-full flex items-center justify-center pl-[0.33rem] border-2 border-neutral-300/80 hover:scale-[115%] customShadow transition-all ease-out duration-300">
              <FaPlay className=" text-white text-xl drop-shadow-[5px_5px_2px_rgba(0,0,0,0.35)]" />
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full ml-3 mr-6 h-3/4">
        <div className="flex flex-row justify-between items-center gap-3 pt-6 pb-5 w-full">
          <h1 className="font-medium text-lg">{title}</h1>
          <div className="flex flex-row gap-3 items-center">
            <p className="px-2 bg-neutral-300/30 border-2 border-neutral-300/90 drop-shadow-2xl rounded-3xl text-sm font-normal">
              {duration} minut
            </p>
            <p className="text-sm">{categories}</p>
          </div>
        </div>
        <p className="border-y-2 py-2  border-neutral-300/90 mb-5">
          {description}
        </p>
        <div className="flex flex-row w-full items-center gap-2">
          <ButtonWithTime
            time="16:00"
            onClick={() =>
              router.push(`/reserve/${id}?time=${encodeURIComponent("16:00")}`)
            }
          />
          <ButtonWithTime
            time="18:00"
            onClick={() =>
              router.push(`/reserve/${id}?time=${encodeURIComponent("18:00")}`)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default RepertoireOnce;
