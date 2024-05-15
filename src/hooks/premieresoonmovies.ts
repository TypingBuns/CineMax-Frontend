import { appAPI } from "@/utils/appAPI";
import { AxiosResponse } from "axios";

export interface GetMovieDataPremiereSoon {
  id: number;
  title: string;
  originalTitle: string;
  categories: string;
  country: string;
  duration: number;
  yearOfProduction: number;
  description: string;
  trailerLink: string;
  releaseDate: string;
  posterImage: string;
  bannerImage: string;
}

export async function getMovieDetailsPremiereSoon(): Promise<
  GetMovieDataPremiereSoon[] | string
> {
  try {
    const response: AxiosResponse<GetMovieDataPremiereSoon[] | string> =
      await appAPI.get(`/api/movies`, {
        withCredentials: true,
      });

    if (typeof response.data === "string") {
      console.error("Wystąpił błąd podczas pobierania szczegółów filmów");
      return "Wystąpił błąd podczas pobierania szczegółów filmów";
    } else {
      const sortedMovies = response.data.sort((a, b) => {
        return (
          new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
        );
      });

      const today = new Date();
      const todayDateString = `${today.getFullYear()}-${(today.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
      const filteredMovies = sortedMovies
        .filter((movie) => movie.releaseDate >= todayDateString)
        .slice(0, 10);

      console.log("Filmy pobrano poprawnie!");
      return filteredMovies;
    }
  } catch (error: any) {
    console.error("Wystąpił błąd podczas pobierania szczegółów filmów");
    return "Wystąpił błąd podczas pobierania szczegółów filmów";
  }
}
