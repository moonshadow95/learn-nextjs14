import {API_URL} from "../app/(home)/page";
import style from "../styles/movie-videos.module.css"

async function getVideos(id: string) {
  return await (await fetch(`${API_URL}/${id}/videos`)).json()
}

export default async function MovieVideos({id}: { id: string }) {
  const videos = await getVideos(id)
  return <div className={style.container}>
    {videos.map(video =>
      <iframe
        key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )}
  </div>

}
