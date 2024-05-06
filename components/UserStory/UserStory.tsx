import React from 'react';
import {Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import UserStoryStyle from './UserStory.style';

export default function UserStory(props: {
  firstName: string;
  profileImage: any;
}) {
  return (
    <View style={UserStoryStyle.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={65}
      />
      <Text style={UserStoryStyle.firstName}>{props.firstName}</Text>
    </View>
  );
}
