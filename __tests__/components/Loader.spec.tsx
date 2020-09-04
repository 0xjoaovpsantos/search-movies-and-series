import React from 'react';

import { render } from '@testing-library/react-native';

import Loader from '../../src/components/Loader';

describe('Loader component', () => {
  it('should be able to render an loader', () => {
    const { getByTestId } = render(<Loader />);

    expect(getByTestId('loader')).toBeTruthy();
  });
});
