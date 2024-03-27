import React from 'react';

export const metadata = {
  title: 'Movie'
}
const MovieDetail = ({params: {id}}: { params: { id: string } }) => {
  return (
    <h1>Movie {id}</h1>
  )
};

export default MovieDetail;