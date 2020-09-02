import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Header, WrapperImage } from './styles';

import Input from '../../components/Input';
import GridMoviesSeries from '../../components/GridMoviesSeries';

import { useMoviesSeries } from '../../hooks/MoviesSeries';

const Home: React.FC = () => {
  const { data } = useMoviesSeries();

  return (
    <Container>
      <Header>
        <Title>Escolhe um filme aí!</Title>
        <Input />
      </Header>
      {data.length === 0 ? (
        <WrapperImage>
          <Image source={require('../../assets/popcorn.png')} />
        </WrapperImage>
      ) : (
        <GridMoviesSeries data={data} />
      )}
    </Container>
  );
};

export default Home;
