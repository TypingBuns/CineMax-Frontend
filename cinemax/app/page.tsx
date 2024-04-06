import { Footer, Introduction, Navbar, Carousel } from "@/components";
import Image from "next/image";

const slides = [
  "/budda.jpg",
  "/godzilla.jpg",
  "/pogromocyduchow.jpg",
  // "https://i.ibb.co/ncrXc2V/1.png",
  // "https://i.ibb.co/B3s7v4h/2.png",
  // "https://i.ibb.co/XXR8kzF/3.png",
  // "https://i.ibb.co/yg7BSdM/4.png",
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
