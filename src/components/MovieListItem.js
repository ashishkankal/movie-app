import Link from "next/link";
import React from "react";

const MovieListItem = ({ original_title, id, poster_path }) => {
  return (
    <div className="flex">
      <img
        src={`https://image.tmdb.org/t/p/w185/${poster_path}`}
        alt={original_title}
      />
      <div>
        <Link href={`/${id}`}>{original_title}</Link>
      </div>
    </div>
  );
};

export default MovieListItem;
