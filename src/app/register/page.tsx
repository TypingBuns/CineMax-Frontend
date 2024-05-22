'use client'
import { MyButton } from "@/components/common/MyButton";
import MyInput from "@/components/common/MyInput";
import {Authentication} from "@/components/Authentication";
import {useState} from "react";
import {useQuery} from "react-query";
import {registerUser} from "@/hooks/authentication";
import {redirect} from "@remix-run/router";

const Register = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUserame] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [regTry, setRegTry] = useState<boolean>(false);

  const {
    data: registerData,
    isLoading: isRegisterLoading,
    isError: isRegisterError,
    refetch: refetch,
  } = useQuery("Logging in", () => registerUser({
    username: username,
    password: password,
    email: email,
    isAdmin: false,
  }), {
    enabled: false,
    refetchOnWindowFocus: false,
  })

  return(
    <Authentication>
        <p className="text-2xl">Rejestracja</p>
        <MyInput
          name={'email'}
          required={true}
          type={"email"}
          placeholder={'E-mail'}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MyInput
          name={'password'}
          required={true}
          type={"password"}
          placeholder={'Hasło'}
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyInput
          name={'name'}
          required={true}
          type={"text"}
          placeholder={'Imię i nazwisko'}
          onChange={(e) => setUserame(e.target.value)}
        />
        <MyInput
          name={'telephone'}
          required={true}
          type={"tel"}
          placeholder={'Numer telefonu'}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <MyButton
          className="px-4 py-2 font-medium"
          onClick={() => {
            const res = refetch()
            setRegTry(true);
            redirect('/');
          }}
        >
          <p className="group-hover:text-red-700 group-hover:font-bold duration-100">Zarejestruj się</p>
        </MyButton>
    </Authentication>
  );
}

export default Register;