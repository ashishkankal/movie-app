export const fetchMovies = async (url) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie${url}`, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUxZmI2MjQ3NjVlNjM2NmUxMWIzYzk5YjQyYmViYiIsInN1YiI6IjY0YjUxNzkzZTBjYTdmMDBjOGNmMzFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uZjKdjR3SrfQWldbyH-h_GUVar82NvXLPidCg11LYbs",
    },
  });
  const data = await res.json();

  return data;
};

export const fetchMovieById = (movie_id) =>
  fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUxZmI2MjQ3NjVlNjM2NmUxMWIzYzk5YjQyYmViYiIsInN1YiI6IjY0YjUxNzkzZTBjYTdmMDBjOGNmMzFmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uZjKdjR3SrfQWldbyH-h_GUVar82NvXLPidCg11LYbs",
    },
  }).then((res) => res.json());
