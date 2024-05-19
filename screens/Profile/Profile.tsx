import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/globalStyles';
// import navigation type
import {StackNavigationProp} from '@react-navigation/stack';

export default function Profile({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
      <Text>Welcome to Profile page </Text>
    </SafeAreaView>
  );
}
