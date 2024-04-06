import { Footer, Introduction, Navbar, Carousel } from "@/components";
import Image from "next/image";

const slides = [
  "/budda.jpg",
  "/godzilla.jpg",
  "/pogromocyduchow.jpg",
]


export default function Home() {
  return (
    // <main className={"flex min-h-screen flex-col items-center justify-between p-0"}>
     <main>
      <Navbar/>
      <Introduction/>
      <Carousel>
        {slides.map((s)=>(
          <img src={s}/>
        ))}
      </Carousel>
      <Footer/>
    </main>
  );
}
