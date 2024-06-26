import Movie from "../../components/movie";
import style from "../../styles/home.module.css"

export const metadata = {
  title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
  const res = await fetch(API_URL)
  const json = await res.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies()
  return (
    <div className={style.container}>
      {movies.map(movie =>
        <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path}/>
      )}
    </div>
  )
}
