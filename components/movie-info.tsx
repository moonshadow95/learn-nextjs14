import {API_URL} from "../app/(home)/page";
import style from "../styles/movie-info.module.css"

async function getMovie(id: string) {
  return await (await fetch(`${API_URL}/${id}`)).json()
}

export default async function MovieInfo({id}: { id: string }) {
  const movie = await getMovie(id)
  return <div className={style.container}>
    <img className={style.poster} src={movie.poster_path} alt={movie.title}/>
    <div>
      <h1>{movie.title}</h1>
      <h3>⭐{movie.vote_average.toFixed(1)}</h3>
      <p>{movie.overview}</p>
      <a href={movie.hompage} target='_blank'>Home page &rarr;</a>
    </div>
  </div>
}
