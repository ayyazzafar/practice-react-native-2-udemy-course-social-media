import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

function Title(props: {title: string}): any {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
}

export default Title;
