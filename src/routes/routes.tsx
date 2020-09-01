import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Description from '../pages/Description';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Description" component={Description} />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
