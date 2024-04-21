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
        label={'Podaj email:'}
        placeholder={'E-mail |'}
      />
      <MyInput
        label={'Podaj hasło:'}
        placeholder={'Hasło |'}
      />
      <MyButton
        className="px-10 py-2 font-medium"
        onClick={handleStandardLogin}
      >
        Zaloguj się
      </MyButton>
    </Authentication>
  );
}

export default Login;