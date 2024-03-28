export const metadata = {
  title: 'Home',
}

const API_URL="https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){
  await new Promise(resolve => setTimeout(resolve,3000))
  const res = await fetch(API_URL)
  const json = await res.json()
  return json
}
export default async function HomePage(){
  const movies =await getMovies()
  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  )
}
