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
          required={true}
          type={"email"}
          placeholder={'E-mail'}
        />
        <MyInput
          required={true}
          type={"password"}
          placeholder={'Hasło'}
        />
        <MyInput
          required={true}
          type={"text"}
          placeholder={'Imię i nazwisko'}
        />
        <MyInput
          required={true}
          type={"tel"}
          placeholder={'Numer telefonu'}
        />
        <MyButton
          className="px-4 py-2 font-medium"
          onClick={handleStandardRegister}
        >
          <p className="group-hover:text-red-700 group-hover:font-bold duration-100">Zarejestruj się</p>
        </MyButton>
    </Authentication>
  );
}

export default Register;