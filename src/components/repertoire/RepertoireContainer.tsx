import React from 'react'
import RepertoireOnce from './RepertoireOnce';

interface RepertoireContainerProps {
  date: string;
  type: string;
}
const repertoire = [
    {id: 1,
    poster: "/assets/budda_poster.jpg",
    title: "Budda. Dzieciak '98",
    categories: "Dokumentalny",
    production: "Polska",
    duration: 83,
    originalTitle: "BUDDA. DZIECIAK '98",
    year: "2024",
    description: "Film dokumentalny o życiu i dorobku jednego z najpopularniejszych polskich influencerów - Buddy.",
    trailerLink: "https://www.youtube.com/watch?v=fLB8tg1QcJQ",},

    {id: 2,
    poster: "/assets/godzilla_poster.jpg",
    title: "Godzilla i Kong: Nowe Imperium",
    categories: "Akcja, Sci-Fi",
    production: "USA",
    duration: 115,
    originalTitle: "Godzilla x Kong: The New Empire",
    year: "2024",
    description: "Kong broni Ziemi przed niezwykłymi i niebezpiecznymi stworzeniami.",
    trailerLink: "https://www.youtube.com/watch?v=PW1yFC55JEA",},]
const RepertoireContainer: React.FC<RepertoireContainerProps> = ({ date, type }) => {
  return (
    <div >
      {repertoire.map((movie,index) =>(
        <div key={index} className='w-full flex flex-col justify-center items-center pb-5 '>
        <RepertoireOnce {...movie}/>
        </div>
      )
    )}

    </div>
  )
}

export default RepertoireContainer