"use client"

import Image from 'next/image'
import Carousel from 'react-bootstrap/Carousel';
import styles from './carousel.module.css';

function CarouselReact() {


  const slides = [
    {src: "/budda.jpg", 
    title: "BUDDA. DZIECIAK '98", 
    categories: "Dokumentalny",
    production: "Polska",
    time: "1h 23min",
    originalTitle: "BUDDA. DZIECIAK '98",
    year: "2024",
    description: "Film dokumentalny o życiu i dorobku jednego z najpopularniejszych polskich influencerów - Buddy.",},

    {src: "/godzilla.jpg",
    title: "GODZILLA I KONG: NOWE IMPERIUM",
    categories: "Akcja, Sci-Fi",
    production: "USA",
    time: "1h 55min",
    originalTitle: "Godzilla x Kong: The New Empire",
    year: "2024",
    description: "Kong broni Ziemi przed niezwykłymi i niebezpiecznymi stworzeniami."},

    {src: "/pogromocyduchow.jpg",
    title: "POGROMCY DUCHÓW: IMPERIUM LODU",
    categories: "Horror, Komedia, Sci-Fi",
    production: "USA",
    time: "1h 55min",
    originalTitle: "Ghostbusters: Frozen Empire",
    year: "2024",
    description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
    {src: "/pogromocyduchow.jpg",
    title: "POGROMCY DUCHÓW: IMPERIUM LODU",
    categories: "Horror, Komedia, Sci-Fi",
    production: "USA",
    time: "1h 55min",
    originalTitle: "Ghostbusters: Frozen Empire",
    year: "2024",
    description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
    {src: "/pogromocyduchow.jpg",
    title: "POGROMCY DUCHÓW: IMPERIUM LODU",
    categories: "Horror, Komedia, Sci-Fi",
    production: "USA",
    time: "1h 55min",
    originalTitle: "Ghostbusters: Frozen Empire",
    year: "2024",
    description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
    {src: "/pogromocyduchow.jpg",
    title: "POGROMCY DUCHÓW: IMPERIUM LODU",
    categories: "Horror, Komedia, Sci-Fi",
    production: "USA",
    time: "1h 55min",
    originalTitle: "Ghostbusters: Frozen Empire",
    year: "2024",
    description: "Gdy w środku upalnego lata Nowy Jork zamarza, pogromcy duchów próbują odkryć stojącą za tym mroczną siłę."},
]
  
  return (
<Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselReact;