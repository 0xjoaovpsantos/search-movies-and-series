import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, WrapperPoster, Title, Year, Text } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const Description: React.FC = () => (
  <Container>
    <ScrollView>
      <WrapperPoster>
        <Image
          source={{
            uri:
              'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY741_.jpg',
          }}
          style={styles.img}
        />

        <Title>Avengers EndGame</Title>
        <Year>2019 - 73 min</Year>
      </WrapperPoster>
      <Text>
        "When the Chitauri invaders are sighted in the African kingdom of
        Wakanda, the Avengers covertly enter the advanced nation to
        investigate."
      </Text>
      <Text>Director</Text>
      <Text>Writers</Text>
      <Text>Actos</Text>
    </ScrollView>
  </Container>
);

const styles = StyleSheet.create({
  img: {
    width: 200,
    resizeMode: 'stretch',
    height: 300,
    borderRadius: 4,
  },
});

export default Description;
