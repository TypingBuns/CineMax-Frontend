import Image from "next/image"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "@/assets/logo/cinemax-logo-small.png"

import appstore_img from "@/assets/App-Store.png"
import googleplay_img from "@/assets//Google-Play.png"

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center justify-center bg-gray-800/45">
      <div className="flex flex-col items-center justify-center my-4">
        <span className="uppercase font-bold ">Śledź nas na Social Mediach!</span>
        <div className="flex flex-row items-center justify-center my-4 gap-5">
        <Link href="https://www.facebook.com" className="flex flex-col items-center text-md" target="_blank">
        <FaFacebook className="text-3xl"/>
        <p>Facebook</p>
        </Link>

        <Link href="https://www.instagram.com" className="flex flex-col items-center text-md" target="_blank">
        <FaInstagram className="text-3xl "/>
        <p>Instagram</p>
        </Link>
        
        <Link href="https://www.twitter.com" className="flex flex-col items-center text-md" target="_blank">
        <FaTwitter className="text-3xl"/>
        <p>Twitter</p>
        </Link>

        <Link href="https://www.youtube.com" className="flex flex-col items-center text-md" target="_blank">
        <FaYoutube className="text-3xl"/>
        <p>Youtube</p>
        </Link>
        </div>
      </div>

      <div className="flex w-full px-64 gap-24 justify-center">
        <div className="flex flex-col w-2/6">
          <h1 className="uppercase font-bold text-lg mb-4">Newsletter</h1>
          <p className="text-sm mb-4 ">Bądź na bieżąco z najnowszymi premierami, wydarzeniami i ofertami specjalnymi, kuponami rabatowymi</p>
          <div className="flex flex-row justify-between">
          <input className="w-3/5 px-3 py-2 border rounded-md focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 text-customBackColor" type="email" name="" id="" placeholder="Podaj adres e-mail"/>
          <input type="button" value="Zapisz mnie" className="px-4 mr-4 rounded-md border-2 hover:bg-rose-700/75 ease-in duration-200 cursor-pointer"/>
          </div>

        </div>

        <div className="flex flex-col">
          <h1 className="uppercase font-bold mb-4 text-lg">Obsługa</h1>
          <Link className="hover:text-gray-300 ease-in-out duration-100 no-underline" href="/">Kontakt</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">Płatności</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">Bilety</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">Zwroty</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">FAQ</Link>
        </div>
        <div className="flex flex-col">
          <h1 className="uppercase font-bold mb-4 text-lg">Informacje</h1>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">Aktualności</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100"href="/">O nas</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">Pracuj z nami</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">Polityka prywatności</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">Regulamin</Link>
          <Link className="hover:text-gray-300 ease-in-out duration-100" href="/">Co gramy aktualnie</Link>
        </div>

        
        <div className="flex flex-col ">
        <h1 className="uppercase font-bold mb-4 text-lg">Nasza aplikacja</h1>
          <div className="flex flex-row gap-2">
          <Link href="https://www.apple.com/pl/app-store/" target="_blank">
          <Image src={appstore_img} width={153.75} height={45.675} alt="Pobierz aplikację na App Store"/>
          </Link>
          <Link href="https://play.google.com/store/" target="_blank">
          <Image src={googleplay_img} width={153.75} height={45.675} alt="Pobierz aplikację na Google Play"/>
          </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center py-6">
        <Link href="/">
        <Image
          src={logo}
          width={81}
          height={26.25}
          alt="Home page"
      />
      </Link>
      <p className="text-xs">Copyright © 2024. All rights reserved by Cinemax.pl</p>
      </div>
    </footer>
  )
}

export default Footer