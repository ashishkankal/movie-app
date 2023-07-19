import React, { useState } from "react";
import MovieListItem from "./MovieListItem";
import { fetchMovies } from "@/network";

const MovieList = () => {
  const {
    data,
    loading,
    fetchNextPage,
    hasNextPage,
    hasPreviousPage,
    fetchPreviousPage,
    currentPage,
  } = useGetMovies("/popular", { infiniteScroll: true });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.map((item) => (
        <MovieListItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default MovieList;
