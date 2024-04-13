import CarouselReact from "@/components/Carousel";
import Carousel from "@/components/CarouselOld";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col space-y-14 py-10">
    <Introduction/>
    <CarouselReact/>
    </div>
  );
}
