import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Header, WrapperImage } from './styles';

import Input from '../../components/Input';
import GridMoviesSeries from '../../components/GridMoviesSeries';

const Home: React.FC = () => (
  <Container>
    <Header>
      <Title>Escolhe um filme aí!</Title>
      <Input />
    </Header>

    <GridMoviesSeries />
  </Container>
);

export default Home;
