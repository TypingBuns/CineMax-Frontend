'use client'
import logo from "@/assets/logo/cinemax-logo.png";
import Image from 'next/image'
import { MyButton } from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import { SlSocialGoogle } from "react-icons/sl";
import {Authentication} from "@/components/Authentication";
const Login = () => {

  const handleStandardLogin = () => {
    console.log("this will be for standard login");
  }


  return(
    <Authentication>
      <p className="text-2xl">Logowanie</p>
      <MyInput
        placeholder={'E-mail'}
      />
      <MyInput
        placeholder={'Hasło'}
      />
      <MyButton
        className="px-4 py-2 font-medium"
        onClick={handleStandardLogin}
      >
        <p className="group-hover:text-red-700 group-hover:font-bold font-medium duration-100">Zaloguj się</p>
      </MyButton>
    </Authentication>
  );
}

export default Login;