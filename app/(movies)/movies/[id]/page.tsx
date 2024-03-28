import React from 'react';
import {API_URL} from "../../../(home)/page";

export const metadata = {
  title: 'Movie'
}

async function getMovie(id: string) {
  return await (await fetch(`${API_URL}/${id}`)).json()
}

async function getVideos(id: string) {
  return await (await fetch(`${API_URL}/${id}/videos`)).json()
}

const MovieDetail = async ({params: {id}}: { params: { id: string } }) => {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
  return (
    <h1>{movie.title}</h1>
  )
};

export default MovieDetail;

