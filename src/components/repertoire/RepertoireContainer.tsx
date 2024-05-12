import React from 'react'
import RepertoireOnce from './RepertoireOnce';

interface RepertoireContainerProps {
  date: string;
  type: string;
}
const repertoire = [
    {src: "/assets/budda_poster.jpg", 
    title: "Budda. Dzieciak '98", 
    categories: "Dokumentalny",
    production: "Polska",
    time: 83,
    originalTitle: "BUDDA. DZIECIAK '98",
    year: "2024",
    description: "Film dokumentalny o życiu i dorobku jednego z najpopularniejszych polskich influencerów - Buddy.",
    link: "https://www.youtube.com/watch?v=fLB8tg1QcJQ",},

    {src: "/assets/godzilla_poster.jpg",
    title: "Godzilla i Kong: Nowe Imperium",
    categories: "Akcja, Sci-Fi",
    production: "USA",
    time: 115,
    originalTitle: "Godzilla x Kong: The New Empire",
    year: "2024",
    description: "Kong broni Ziemi przed niezwykłymi i niebezpiecznymi stworzeniami.",
    link: "https://www.youtube.com/watch?v=PW1yFC55JEA",},]
const RepertoireContainer: React.FC<RepertoireContainerProps> = ({ date, type }) => {
  return (
    <div >
      {repertoire.map((movie,index) =>(
        <div className='w-full flex flex-col justify-center items-center pb-5 '>
        <RepertoireOnce title={movie.title} categories={movie.categories} description={movie.description} duration={movie.time} poster={movie.src} trailerLink={movie.link}/>
        </div> 
      )
    )}
      
    </div>
  )
}

export default RepertoireContainer