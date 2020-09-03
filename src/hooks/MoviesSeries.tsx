import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';
import { API_KEY } from '../../config.json';

export interface MoviesProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ResponseProps {
  Search: MoviesProps[];
  totalResults: string;
}

interface MoviesSeriesProps {
  data: object;
  search(movie: string): Promise<void>;
  loadMoreMovies(): Promise<void>;
}

const MoviesSeries = createContext<MoviesSeriesProps>({} as MoviesSeriesProps);

const MoviesSeriesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<MoviesProps[]>([]);
  const [movie, setMovie] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(0);

  async function search(movieSearch: string) {
    try {
      const response = await api.get<ResponseProps>(
        `/?apikey=${API_KEY}&s=${movieSearch}`,
      );
      setData(response.data.Search);
      setTotalResults(parseInt(response.data.totalResults));
      setPage(1);
      setMovie(movieSearch);
    } catch (error) {
      throw new Error(error.response.data);
    }
  }

  async function loadMoreMovies() {
    if (totalResults - 10 > 0) {
      setTotalResults((prevTotalResults) => prevTotalResults - 10);
      try {
        const response = await api.get<ResponseProps>(
          `/?apikey=${API_KEY}&s=${movie}&page=${page + 1}`,
        );
        setPage((prevPage) => prevPage + 1);
        setData([...data, ...response.data.Search]);
        console.log(data.length);
        console.log(data);
      } catch (error) {
        throw new Error(error.response.data);
      }
    }
  }

  return (
    <MoviesSeries.Provider value={{ data, search, loadMoreMovies }}>
      {children}
    </MoviesSeries.Provider>
  );
};

export function useMoviesSeries(): MoviesSeriesProps {
  const hooks = useContext(MoviesSeries);
  return hooks;
}

export default MoviesSeriesProvider;
