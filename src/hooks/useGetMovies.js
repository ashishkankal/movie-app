import { fetchMovies } from "@/network";
import React, { useEffect } from "react";

const useGetMovies = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, sethasNextPage] = useState(false);

  const _fetchMovies = async () => {
    const data = await fetchMovies(url);
    setData(data);
  };

  useEffect(() => {
    _fetchMovies();
  }, [url]);

  const fetchNextPage = () => {
    if (data.page >= data.total_pages) {
      return;
    }
    fetchMovies(`${url}?page=${data.page + 1}`).then((res) => {
      setData(res);
      setLoading(false);
    });
  };

  const fetchPreviousPage = () => {
    if (data.page == 1) {
      return;
    }
    fetchMovies(`${url}?page=${data.page - 1}`).then((res) => {
      setData(res);
      setLoading(false);
    });
  };

  return {
    data: data.results,
    loading,
    hasNextPage,
    fetchNextPage,
    fetchPreviousPage,
    currentPage: data.page,
  };
};

export default useGetMovies;
