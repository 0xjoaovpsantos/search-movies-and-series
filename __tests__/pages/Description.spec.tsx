import React from 'react';

import { render } from '@testing-library/react-native';

import Description from '../../src/pages/Description';

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
      searchMovieId: jest.fn(),
      descriptonMovie: jest.fn(),
      load: false,
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

describe('Description page', () => {
  it('should be able to render an Description', () => {
    const { getByTestId } = render(<Description />);

    expect(getByTestId('description')).toBeTruthy();
  });
});
