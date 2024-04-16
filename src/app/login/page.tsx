import logo from "@/assets/logo/cinemax-logo.png";
import Image from 'next/image'
import {Input} from "postcss";
const Login = () => {
  return(
    <div className="flex justify-center items-center h-[90vh]">
    <div className="flex flex-col items-center w-[45rem] py-12 px-28 bg-black rounded-3xl space-y-5">
      <div className="w-1/2">
        <Image
          src={logo}
          alt={"cinemax logo"}
        />
      </div>
      <p className="text-2xl">Logowanie</p>
      <p className="flex justify-around w-full items-center">
        <label className="">
          Podaj email:
        </label>
        <input className="text-black w-[70%] h-10 rounded-l"/>
      </p>
      <p className="flex justify-around w-full">
        <label className="">
          Podaj hasło:
        </label>
        <input className="text-black w-[70%] h-10 rounded-l"/>
      </p>
      <p>
        TODO:
        Zaloguj się;
        lub;
        kontynuuj z Google;
        Przetworzymy twój adres email, żeby sprawdzić czy jesteś już zalogowany
      </p>
    </div>
    </div>
  );
}

export default Login;