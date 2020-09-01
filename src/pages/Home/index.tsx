import React from 'react';
import { Image } from 'react-native';
import { Container, Title, Header, WrapperImage } from './styles';
import Input from '../../components/Input';

const Home: React.FC = () => (
  <Container>
    <Header>
      <Title>Escolhe um filme aí!</Title>
      <Input />
    </Header>
    <WrapperImage>
      <Image source={require('../../assets/popcorn.png')} />
    </WrapperImage>
  </Container>
);

export default Home;
