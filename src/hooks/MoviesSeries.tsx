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
  Response: string;
}

interface DescriptionProps {
  Title: string;
  Year: string;
  Runtime: string;
  Direction: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster: string;
}

interface MoviesSeriesProps {
  data: object;
  search(movie: string): Promise<void>;
  loadMoreMovies(): Promise<void>;
  notFound: boolean;
  descriptionMovie: DescriptionProps;
  searchMovieId(id: string): Promise<void>;
  load: boolean;
}

const MoviesSeries = createContext<MoviesSeriesProps>({} as MoviesSeriesProps);

const MoviesSeriesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<MoviesProps[]>([]);
  const [movie, setMovie] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [descriptionMovie, setDescriptionMovie] = useState(
    {} as DescriptionProps,
  );
  const [load, setLoad] = useState(false);

  async function search(movieSearch: string) {
    try {
      const response = await api.get<ResponseProps>(
        `/?apikey=${API_KEY}&s=${movieSearch}`,
      );

      if (response.data.Response === 'True') {
        setData(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults));
        setPage(1);
        setMovie(movieSearch);
        setNotFound(false);
      } else {
        setNotFound(true);
        setData([]);
      }
    } catch (error) {
      console.log('erro');
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
      } catch (error) {
        throw new Error(error.response.data);
      }
    }
  }

  async function searchMovieId(id: string) {
    setLoad(true);
    try {
      const response = await api.get<DescriptionProps>(
        `/?apikey=${API_KEY}&i=${id}`,
      );
      console.log('ok');
      setDescriptionMovie(response.data);
    } catch (error) {
      console.log('error');
      throw new Error(error.response.data);
    }
    setLoad(false);
  }

  return (
    <MoviesSeries.Provider
      value={{
        data,
        search,
        loadMoreMovies,
        notFound,
        descriptionMovie,
        searchMovieId,
        load,
      }}
    >
      {children}
    </MoviesSeries.Provider>
  );
};

export function useMoviesSeries(): MoviesSeriesProps {
  const hooks = useContext(MoviesSeries);
  return hooks;
}

export default MoviesSeriesProvider;
