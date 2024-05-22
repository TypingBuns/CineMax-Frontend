import { appAPI } from "@/utils/appAPI";
import {AxiosResponse} from "axios";
import Cookies from "universal-cookie";

interface LoginUserData {
  username: unknown;
  password: unknown;
}

export interface LoginResponse {
  token: string
}

export async function loginUser(userData: LoginUserData): Promise<LoginResponse | number> {
  try {
    const response: AxiosResponse<LoginResponse> = await appAPI.post(
      `/api/login`,
      userData,
      {
        withCredentials: true,
      }
    )
    if (response.status === 200) {
      console.log("Zalogowano poprawnie");
      const cookies = new Cookies();
      cookies.set('session token', response.data.token);
      return 200;
    }
    if (response.status === 401) {
      console.error("Nieprawidłowy login lub hasło");
      return 401;
    } else {
      console.error("Wystąpił błąd podczas logowania")
      return 500;
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      console.error("Nieprawidłowy login lub hasło");
      return 401;
    } else {
      console.error("Wystąpił błąd podczas logowania");
      return 500;
    }
  }
}

interface registerUserData {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

export async function registerUser(registerData: registerUserData) {
  try {
    const response: AxiosResponse<void> = await appAPI.post(
      `/api/register`,
      registerData,
      {
        withCredentials: true,
      }
    )
    if (response.status === 200) {
      console.log("Zarejestrowano poprawnie");
      window.location.href = '/';
      return response.status;
    } else {
      console.error("Wystąpił błąd podczas rejestracji")
    }
  } catch (error: any) {
    console.error("Wystąpił błąd podczas rejestracji")
  }
}