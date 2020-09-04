import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../utils/theme';

import { Container } from './styles';

const Loader: React.FC = () => (
  <Container testID="loader">
    <ActivityIndicator color={theme.font} size="large" />
  </Container>
);

export default Loader;
