// import axios from "axios";
// import type { Movie } from "../types/movie";

// const BASE_URL = import.meta.env.VITE_TMDB_API_BASE_URL as string;
// const TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN as string;

// interface SearchResponse {
//   page: number;
//   results: Movie[];
//   total_pages: number;
//   total_results: number;
// }

// if (!BASE_URL) {
//   console.warn("VITE_TMDB_API_BASE_URL is not set");
// }

// if (!TOKEN) {
//   console.warn("VITE_TMDB_ACCESS_TOKEN is not set");
// }

// export async function fetchMovies(query: string): Promise<SearchResponse> {
//   const response = await axios.get<SearchResponse>(`${BASE_URL}/search/movie`, {
//     params: {
//       query,
//       include_adult: false,
//       language: "en-US",
//       page: 1,
//     },
//     headers: {
//       Authorization: `Bearer ${TOKEN}`,
//       accept: "application/json",
//     },
//   });

//   return response.data;
// }

import tmdb from "../api/tmdb";
import type { Movie } from "../types/movie";

export async function searchMovies(query: string): Promise<Movie[]> {
  const { data } = await tmdb.get("/search/movie", {
    params: { query },
  });

  return data.results || [];
}
