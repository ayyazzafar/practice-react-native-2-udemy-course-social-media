import {View, Text} from 'react-native';
import React from 'react';
import style from './ProfileTabTitle.style';
export default function ProfileTabTitle({
  title,
  isFocused,
}: {
  title: string;
  isFocused: boolean;
}) {
  return (
    <Text style={[style.title, isFocused && style.titleNotFocused]}>
      {title}
    </Text>
  );
}
