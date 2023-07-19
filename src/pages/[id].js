import { fetchMovieById } from "@/network";
import React from "react";

const MoviePage = ({ data }) => {
  return (
    <div className="flex">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`}
          alt={data.original_title}
        />
      </div>
      <div>
        <h1>{data.original_title}</h1>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default MoviePage;

export const getServerSideProps = async (req) => {
  const data = await fetchMovieById(parseInt(req.params.id));
  return { props: { data } };
};
