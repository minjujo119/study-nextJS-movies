'use client';

import Link from "next/link";
import styles from "../styles/MovieItem.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function MovieItem({ id, poster_path, title }: IMovieProps) {
  const router = useRouter();
  const onClick =()=>{
    router.push(`/movies/${id}`)
  }
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick}/>
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
