import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';

export default function App() {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 50,
          fontFamily: getFontFamily('Inter', '900'),
        }}>
        Hello world
      </Text>
    </SafeAreaView>
  );
}
