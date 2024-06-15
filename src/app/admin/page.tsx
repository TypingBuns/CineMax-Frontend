"use client";
import { MyButton } from "@/components/common/MyButton";
import { SlSocialGoogle } from "react-icons/sl";
import Image from "next/image";
import logo from "@/assets/logo/cinemax-logo.png";
import { useState } from "react";
import MyInput from "@/components/common/MyInput";

const AdminPanel = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLogin(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Przykład prostego sprawdzenia hasła
    if (login === "admin" && password === "admin") {
      // Przekierowanie po pomyślnym zalogowaniu
      window.location.href = "/panel";
    } else {
      // Ustawienie komunikatu o błędzie
      setError("Niepoprawny login lub hasło. Spróbuj ponownie.");
    }
  };
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex flex-col items-center space-y-5 w-[45rem] py-12 px-28 rounded-3xl bg-gray-800/45 shadow-blue-900 shadow-2xl">
        <div className="w-1/2 mb-3">
          <Image className="scale-75" src={logo} alt={"cinemax logo"} />
        </div>
        <h2 className="text-3xl font-bold pb-5 text-center text-ziel2">
          Panel Administratora
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col"
        >
          <MyInput
            name={"login"}
            required={true}
            type={"text"}
            placeholder={"Login"}
            onChange={(e) => setLogin(e.target.value)}
          />
          <MyInput
            name={"password"}
            required={true}
            type={"password"}
            placeholder={"Hasło"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <MyButton className="px-4 py-2 font-medium flex items-center space-x-2.5">
            <p className="group-hover:text-red-700 group-hover:font-bold duration-100">
              Zaloguj się
            </p>
          </MyButton>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;
