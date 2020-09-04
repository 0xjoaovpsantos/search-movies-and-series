import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import GridMoviesSeries from '../../src/components/GridMoviesSeries';

const mockedData = [
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDE3NjY3Y2MtODE4YS00YzFiLThhMTMtY2Q1NTZkODE4M2NlXkEyXkFqcGdeQXVyNjYwMjkwMjg@._V1_SX300.jpg',
    Title: 'Naruto the Movie 2: Legend of the Stone of Gelel',
    Type: 'movie',
    Year: '2005',
    imdbID: 'tt0791188',
  },
];

jest.mock('../../src/hooks/MoviesSeries', () => {
  return {
    useMoviesSeries: () => ({
      loadMoreVideos: jest.fn(),
    }),
  };
});

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('GridMoviesSeries component', () => {
  it('should be able to render an GridMoviesSeries', () => {
    const { getByTestId } = render(<GridMoviesSeries data={mockedData} />);

    expect(getByTestId('grid')).toBeTruthy();
  });

  it('should be able on movie/game/serie and go to description page', () => {
    const { getByTestId } = render(<GridMoviesSeries data={mockedData} />);

    const movie = getByTestId('movie');

    fireEvent(movie, 'onPress');

    expect(mockedNavigate).toHaveBeenCalled();
  });
});
