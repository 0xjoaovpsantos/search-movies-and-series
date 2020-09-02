import 'react-native-gesture-handler';
import React from 'react';

import MoviesSeriesProvider from './src/hooks/MoviesSeries';

import AppRoutes from './src/routes/routes';

const App: React.FC = () => (
  <MoviesSeriesProvider>
    <AppRoutes />
  </MoviesSeriesProvider>
);

export default App;
