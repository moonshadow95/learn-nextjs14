"use client"
import React from 'react';
import Link from "next/link";
import style from "../styles/movie.module.css"
import {useRouter} from "next/navigation";

interface IMovieProps {
  title: string
  id: string
  poster_path: string
}

const Movie = ({title, id, poster_path}: IMovieProps) => {
  const router = useRouter()
  const onClick = () => {
    router.push(`/movies/${id}`)
  }
  return (
    <Link href={`/movies/${id}`}>
      <div key={id} className={style.movie}>
        <img src={poster_path} alt={title} onClick={onClick}/>
        {title}
      </div>
    </Link>
  )
};

export default Movie;