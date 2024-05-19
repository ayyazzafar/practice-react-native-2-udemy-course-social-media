import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import MainNavigation from './navigation/MainNavigation';
export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

let styles = StyleSheet.create({
  fontAwesomeIcon: {
    color: '#898DAE',
  },
});
