import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, WrapperPoster, Title, Year, Text } from './styles';
import { ScrollView } from 'react-native-gesture-handler';

import { useMoviesSeries } from '../../hooks/MoviesSeries';

import Loader from '../../components/Loader';

const Description: React.FC = ({ route }) => {
  const { id } = route.params;
  const { searchMovieId, descriptionMovie, load } = useMoviesSeries();

  useEffect(() => {
    async function search() {
      await searchMovieId(id);
    }
    search();
  }, []);

  return (
    <Container testID="description">
      {load ? (
        <Loader />
      ) : (
        <ScrollView>
          <WrapperPoster>
            <Image
              source={{
                uri: descriptionMovie.Poster,
              }}
              style={styles.img}
            />

            <Title>{descriptionMovie.Title}</Title>
            <Year>
              {descriptionMovie.Year} - {descriptionMovie.Runtime}
            </Year>
          </WrapperPoster>
          {descriptionMovie.Plot && <Text>{descriptionMovie.Plot}</Text>}
          {descriptionMovie.Direction && (
            <Text>Director: {descriptionMovie.Direction}</Text>
          )}
          {descriptionMovie.Writer && (
            <Text>Writer: {descriptionMovie.Writer}</Text>
          )}
          {descriptionMovie.Actors && (
            <Text>Actors: {descriptionMovie.Actors}</Text>
          )}
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    resizeMode: 'stretch',
    height: 300,
    borderRadius: 4,
  },
});

export default Description;
