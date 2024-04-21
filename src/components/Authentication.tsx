import {MyButton} from "@/components/common/MyButton";
import {SlSocialGoogle} from "react-icons/sl";
import Image from "next/image";
import logo from "@/assets/logo/cinemax-logo.png";

export function Authentication({
                           children,
                           className,
                         }: {
  children: React.ReactNode;
  className?: string;
}) {

  const handleGoogleLogin = () => {
    console.log("this will be for Google login");
  }

  return(
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex flex-col items-center space-y-5 w-[45rem] py-12 px-28 rounded-3xl bg-slate-950 shadow-violet-900 shadow-xl">
        <div className="w-1/2">
          <Image
            src={logo}
            alt={"cinemax logo"}
          />
        </div>
        {children}
        <p>lub</p>
        <MyButton
          className="px-4 py-2 font-medium flex items-center space-x-2.5"
          onClick={handleGoogleLogin}
        >
          <SlSocialGoogle className="text-3xl fill-black"/>
          <p>Kontynuuj z Google</p>
        </MyButton>
        <p className="text-[0.7rem] text-center">
          Przetworzymy twój adres email, żeby sprawdzić czy jesteś już zalogowany
        </p>
      </div>
    </div>
  );
}