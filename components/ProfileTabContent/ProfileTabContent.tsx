import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import style from './ProfileTabContent.style';

export default function ProfileTabContent() {
  return (
    <ScrollView
      style={style.profileTabContentContainer}
      showsVerticalScrollIndicator={false}>
      <View style={style.profileTabcontent}>
        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />

        <Image
          resizeMode="contain"
          style={style.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
}
