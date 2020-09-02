import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';

interface MoviesProps {
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
    const response = await api.get<ResponseProps[]>(`&s=${movie}`);
    setData(response.data.Search);
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
