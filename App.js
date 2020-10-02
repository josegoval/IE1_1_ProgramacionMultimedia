// React
import React from 'react';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';
// Screens
import MainNavigation from './src/screens/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
