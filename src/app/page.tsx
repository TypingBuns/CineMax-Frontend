import NowPlayingCarousel from "@/components/NowPlayingCarousel";
import Introduction from "@/components/Introduction";
import FilmPremiereSoonCarousel from "@/components/FilmPremiereSoonCarousel";
import {AuthProvider} from "@/contexts/AuthContext";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col space-y-14 py-10">
    <Introduction/>
    <NowPlayingCarousel/>
    <FilmPremiereSoonCarousel/>
    </div>
  );
}
