import React from 'react';
import HomeStackNavigator from './src/navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App(){
  return(
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}