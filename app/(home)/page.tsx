import { Metadata } from "next";
import MovieItem from "../../components/MovieItem";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by Next.js",
};

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const json = await (await fetch(API_URL)).json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieItem
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
