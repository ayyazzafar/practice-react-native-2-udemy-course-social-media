import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/globalStyles';
// import navigation type
import {StackNavigationProp} from '@react-navigation/stack';
import profileStyles from './Profile.style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';
import {height} from '@fortawesome/free-regular-svg-icons/faHeart';

export default function Profile({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={[globalStyle.flexGrow]}>
        <View style={[profileStyles.profileImageContainer]}>
          <View style={profileStyles.profileImageContent}>
            <Image
              style={profileStyles.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={profileStyles.username}>Emmanuael Robertson</Text>
        <View style={[profileStyles.statContainer]}>
          <View>
            <Text style={profileStyles.statAmount}>45</Text>
            <Text style={profileStyles.statType}>Following</Text>
          </View>

          <View style={profileStyles.statBorder}></View>

          <View>
            <Text style={profileStyles.statAmount}>30M</Text>
            <Text style={profileStyles.statType}>Followers</Text>
          </View>

          <View>
            <Text style={profileStyles.statAmount}>100</Text>
            <Text style={profileStyles.statType}>Posts</Text>
          </View>
        </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
