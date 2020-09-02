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
}

interface MoviesSeriesProps {
  data: object;
  search(movie: string): Promise<void>;
}

const MoviesSeries = createContext<MoviesSeriesProps>({} as MoviesSeriesProps);

const MoviesSeriesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<MoviesProps[]>([]);

  async function search(movie: String) {
    try {
      const response = await api.get<ResponseProps>(
        `/?apikey=${API_KEY}&s=${movie}`,
      );
      setData(response.data.Search);
    } catch (error) {
      throw new Error(error.response.data);
    }
  }

  return (
    <MoviesSeries.Provider value={{ data, search }}>
      {children}
    </MoviesSeries.Provider>
  );
};

export function useMoviesSeries(): MoviesSeriesProps {
  const hooks = useContext(MoviesSeries);
  return hooks;
}

export default MoviesSeriesProvider;
