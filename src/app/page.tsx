import CarouselReact from "@/components/Carousel";
import Carousel from "@/components/CarouselOld";
import Introduction from "@/components/Introduction";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Introduction/>
    <Carousel/>
    {/* <CarouselReact/> */}
    </>
  );
}
