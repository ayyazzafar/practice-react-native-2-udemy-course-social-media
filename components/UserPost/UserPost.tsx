import React from 'react';
import {Image, Text, View} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import UserPostStyle from './UserPost.style';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faBookmark, faMessage} from '@fortawesome/free-regular-svg-icons';

export default function UserPost({
  firstName,
  lastName,
  location,
  image,
  profileImage,
  bookmarks,
  comments,
  likes,
}: {
  firstName: string;
  lastName: string;
  location: string;
  image: any;
  profileImage: string;
  bookmarks: number;
  comments: number;
  likes: number;
}) {
  return (
    <View style={UserPostStyle.userPostContainer}>
      <View style={UserPostStyle.user}>
        <View style={UserPostStyle.userContainer}>
          <UserProfileImage profileImage={profileImage} imageDimensions={45} />
          <View style={UserPostStyle.userTextContainer}>
            <Text style={UserPostStyle.username}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={UserPostStyle.location}>{location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={24} />
      </View>

      <View style={UserPostStyle.postImage}>
        <Image
          source={image}
          style={{
            width: '100%',
            borderRadius: 20,
          }}
        />
      </View>

      <View
        style={{
          marginLeft: 10,
          flexDirection: 'row',
          gap: 30,
        }}>
        <View style={{flexDirection: 'row', gap: 3}}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text
            style={{
              color: '#79869F',
            }}>
            {likes}
          </Text>
        </View>

        <View style={{flexDirection: 'row', gap: 3}}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text
            style={{
              color: '#79869F',
            }}>
            {likes}
          </Text>
        </View>

        <View style={{flexDirection: 'row', gap: 3}}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text
            style={{
              color: '#79869F',
            }}>
            {likes}
          </Text>
        </View>
      </View>
    </View>
  );
}
