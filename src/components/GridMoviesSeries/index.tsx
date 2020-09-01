import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Container } from './styles';

const { width } = Dimensions.get('window');
const numberGrid = 2;
const itemWidth = (width - 32) / numberGrid;

const movies = [
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
  {
    name: 'The batman',
    url:
      'https://i2.wp.com/assets.propmark.com.br/legacy/upload/2018/04/5ad8b07fa64f8-5addc73f1401c-980x480.jpg?resize=720%2C353&ssl=1',
  },
];

const GridMoviesSeries: React.FC = () => (
  <Container>
    <FlatList
      data={movies}
      numColumns={numberGrid}
      key={numberGrid}
      keyExtractor={(movie) => movie.name}
      renderItem={({ item: movie }) => (
        <View style={styles.wrapper}>
          <Image source={{ uri: movie.url }} style={styles.img} />
          <Text>
            Nome do filme aquiNome do filme aquiNome do filme aquiNome do filme
            aqui
          </Text>
        </View>
      )}
    />
  </Container>
);

const styles = StyleSheet.create({
  img: {
    width: itemWidth,
    height: 100,
  },
  wrapper: {
    width: itemWidth,

    margin: 2,
    backgroundColor: 'red',
    paddingBottom: 4,
  },
});

export default GridMoviesSeries;
