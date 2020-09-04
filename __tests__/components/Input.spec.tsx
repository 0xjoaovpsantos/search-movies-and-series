import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import Input from '../../src/components/Input';

const mockedSearch = jest.fn();

jest.mock('../../src/hooks/MoviesSeries', () => {
  return {
    useMoviesSeries: () => ({ search: mockedSearch }),
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(<Input />);

    expect(
      getByPlaceholderText('Search movies, games and series'),
    ).toBeTruthy();
  });

  it('should be able to change text', () => {
    const { getByPlaceholderText } = render(<Input />);

    const inputField = getByPlaceholderText('Search movies, games and series');

    fireEvent.changeText(inputField, 'name-of-movie-or-game-or-serie-here');
  });

  it('should be able to click on the keyboard send icon', () => {
    const { getByPlaceholderText } = render(<Input />);

    const inputField = getByPlaceholderText('Search movies, games and series');

    fireEvent(inputField, 'onSubmitEditing');
    expect(mockedSearch).toHaveBeenCalled();
  });

  it('should be able to click on the search icon', () => {
    const { getByTestId } = render(<Input />);

    const searchIcon = getByTestId('searchIcon');

    fireEvent(searchIcon, 'onPress');
    expect(mockedSearch).toHaveBeenCalled();
  });
});
