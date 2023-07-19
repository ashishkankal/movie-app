import { Inter } from "next/font/google";
import MovieList from "@/components/MovieList";
import { fetchMovies } from "@/network";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Movie List Page</h1>
      <MovieList data={data.results} />
    </main>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchMovies();
  return { props: { data } };
};
