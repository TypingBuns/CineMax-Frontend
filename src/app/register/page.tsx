'use client'
import logo from "@/assets/logo/cinemax-logo.png";
import Image from 'next/image'
import { MyButton } from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import { SlSocialGoogle } from "react-icons/sl";
import {Authentication} from "@/components/Authentication";
const Register = () => {

  const handleStandardRegister = () => {
    console.log("this will be for standard Register");
  }


  return(
    <Authentication>
        <p className="text-2xl">Rejestracja</p>
        <MyInput
          placeholder={'E-mail'}
        />
        <MyInput
          placeholder={'Hasło'}
        />
        <MyInput
          placeholder={'Imię i nazwisko'}
        />
        <MyInput
          placeholder={'Numer telefonu'}
        />
        <MyButton
          className="px-10 py-2 font-medium"
          onClick={handleStandardRegister}
        >
          Zarejestruj się
        </MyButton>
    </Authentication>
  );
}

export default Register;