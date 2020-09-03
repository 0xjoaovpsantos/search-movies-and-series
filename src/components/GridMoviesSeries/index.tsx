import React from 'react';
import { Dimensions, FlatList, Image, View, StyleSheet } from 'react-native';
import { Container, WrapperDescription, Name, Year } from './styles';

import { MoviesProps, useMoviesSeries } from '../../hooks/MoviesSeries';

import theme from '../../utils/theme';

const { width } = Dimensions.get('window');
const numberGrid = 2;
const itemWidth = (width - 32) / numberGrid;

interface GridMoviesSeriesProps {
  data: MoviesProps[];
}

const GridMoviesSeries: React.FC<GridMoviesSeriesProps> = ({ data }) => {
  const { loadMoreMovies } = useMoviesSeries();
  return (
    <Container>
      <FlatList
        data={data}
        numColumns={numberGrid}
        keyExtractor={(movie) => movie.imdbID}
        onEndReached={loadMoreMovies}
        onEndReachedThreshold={0.4}
        renderItem={({ item: movie }) => (
          <View style={styles.wrapper}>
            <Image source={{ uri: movie.Poster }} style={styles.img} />
            <WrapperDescription>
              <Name>{movie.Title}</Name>
              <Year>{movie.Year}</Year>
            </WrapperDescription>
          </View>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    width: itemWidth,
    resizeMode: 'stretch',
    height: 180,
    borderRadius: 4,
  },
  wrapper: {
    width: itemWidth,
    margin: 2,
    backgroundColor: theme.font,
    paddingBottom: 4,
    borderRadius: 4,
  },
});

export default GridMoviesSeries;
