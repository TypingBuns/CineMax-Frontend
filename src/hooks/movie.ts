import { appAPI } from "@/utils/appAPI";
import { AxiosResponse } from "axios";

export interface GetMovieData {
    id: number
    title: string,
    originalTitle: string,
    categories: string,
    country: string,
    duration: number,
    yearOfProduction: number,
    description: string,
    trailerLink: string,
    releaseDate: string,
    posterImage:string,
    bannerImage:string,
}
  
export async function getMovieDetails(): Promise<GetMovieData[] | string> {
    try {
      const response: AxiosResponse<GetMovieData[] | string> = await appAPI.get(
        `/api/movies`,
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log("Filmy pobrano poprawnie!");
        return response.data;
      } else {
        console.error("Wystąpił błąd podczas pobierania szczegółów filmów");
        return "Wystąpił błąd podczas pobierania szczegółów filmów";
      }
    } catch (error: any) {
      console.error("Wystąpił błąd podczas pobierania szczegółów filmów");
      return "Wystąpił błąd podczas pobierania szczegółów filmów";
    }
}