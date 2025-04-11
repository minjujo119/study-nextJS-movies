import { API_URL } from "../constants/constants";
import styles from "../styles/movieInfo.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} alt="" />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h2 className={styles.vote}>{`⭐️ ${movie.vote_average.toFixed(1)}`}</h2>
        <p className={styles.overview}>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>Homepage 👉🏻</a>
      </div>
    </div>
  )
}
