import React from 'react';
import theme from '../../utils/theme';
import { Container, TextInput, View } from './styles';

import Icon from 'react-native-vector-icons/Feather';

const Input: React.FC = () => (
  <Container>
    <TextInput
      placeholder="Search movies and series"
      placeholderTextColor={theme.placeholder}
    />
    <View>
      <Icon name="search" size={20} color={theme.font} />
    </View>
  </Container>
);

export default Input;
