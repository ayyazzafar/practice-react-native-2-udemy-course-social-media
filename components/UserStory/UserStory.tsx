import React from 'react';
import {Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import UserStoryStyle from './UserStory.style';
import {horizontalScale} from '../../assets/styles/scaling';

export default function UserStory(props: {
  firstName: string;
  profileImage: any;
}) {
  return (
    <View style={UserStoryStyle.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={horizontalScale(65)}
      />
      <Text style={UserStoryStyle.firstName}>{props.firstName}</Text>
    </View>
  );
}
