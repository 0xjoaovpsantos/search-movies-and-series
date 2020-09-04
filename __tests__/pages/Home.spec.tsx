import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import Home from '../../src/pages/Home';

let mockedData = [
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMDE3NjY3Y2MtODE4YS00YzFiLThhMTMtY2Q1NTZkODE4M2NlXkEyXkFqcGdeQXVyNjYwMjkwMjg@._V1_SX300.jpg',
    Title: 'Naruto the Movie 2: Legend of the Stone of Gelel',
    Type: 'movie',
    Year: '2005',
    imdbID: 'tt0791188',
  },
];

let mockedNotFound = false;

jest.mock('../../src/hooks/MoviesSeries', () => {
  return {
    useMoviesSeries: () => ({
      data: mockedData,
      notFound: mockedNotFound,
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

describe('Home page', () => {
  it('should be able to render an Home', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('home')).toBeTruthy();
  });

  it('should be able to render an Home with notFound === true', () => {
    mockedData = [];
    mockedNotFound = true;
    const { getByTestId } = render(<Home />);

    expect(getByTestId('textNotFound')).toBeTruthy();
  });
});
