import React from 'react';
import {Image, View} from 'react-native';
import UserProfileImageStyle from './UserProfileImage.style';

export default function UserProfileImage(props: {
  profileImage: any;
  imageDimensions: number;
}) {
  return (
    <View
      style={[
        UserProfileImageStyle.userImageContainer,
        {
          borderRadius: props.imageDimensions,
        },
      ]}>
      <Image
        style={[
          UserProfileImageStyle.image,
          {
            width: props.imageDimensions,
            height: props.imageDimensions,
          },
        ]}
        source={props.profileImage}
      />
    </View>
  );
}
