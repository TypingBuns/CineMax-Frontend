import Link from "next/link";
import Image from 'next/image'
import logo from "@/assets/logo/cinemax-logo-small.png"
import dynamic from "next/dynamic";
import {Session} from "next-auth";
import {SignIn} from "@/components/sign-in";

const DynamicHeaderAuth = dynamic(() => import("../header-auth"), {
  ssr: false,
});

type Props = {
  session: Session | null,
}

const Navbar = async (props: Props) => {

  return (
    <div className='z-50 backdrop-blur w-3/6 h-20 px-6 flex items-center justify-between bg-gray-800/45 rounded-b-3xl mx-auto sticky top-0 hover:bg-customBackColor ease-in-out duration-300 '>
      <Link href="/">
      <Image
      src={logo}
      width={108}
      height={35}
      alt="Home page"
    />
            </Link>
      <hr />
      <ul className='flex h-full items-center justify-center' >
        <li className='h-full flex'>
          <Link className='navbar-mid' href="/repertoire"><p>Repertuar</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='navbar-mid' href="/price"><p>Cennik</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='navbar-mid' href="/aktualnosci"><p>Aktualności</p></Link>
          </li>
        <li className='h-full flex'>
          <Link className='navbar-mid' href="/kontakt"><p>Kontakt</p></Link>
          </li>
      </ul>
      <div className='flex gap-6'>
        <DynamicHeaderAuth session={props.session} />
      </div>
    </div>
  )
}

export default Navbar