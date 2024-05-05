import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Title from './components/Title/Title';
import globalStyle from './assets/styles/globalStyles';

export default function App() {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon
            size={20}
            icon={faEnvelope}
            style={{
              color: '#898DAE',
            }}
          />

          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
