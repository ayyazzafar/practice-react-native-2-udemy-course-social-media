import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import homeStyles from './Home.style';
import {scaleFontSize} from '../../assets/styles/scaling';
import Title from '../../components/Title/Title';
import UserPost from '../../components/UserPost/UserPost';
import UserStory from '../../components/UserStory/UserStory';
import globalStyle from '../../assets/styles/globalStyles';
import {Routes} from '../../navigation/routes';

export default function Home({navigation}: {navigation: any}) {
  const [screenData, setScreenData] = useState<any>(Dimensions.get('screen'));

  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<any[]>(
    [],
  );
  const [userStoriesPageSize] = useState(5);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);

  const [userPostsRenderedData, setUserPostsRenderedData] = useState<any[]>([]);
  const [userPostsPageSize] = useState(5);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);

  const pagination = (database: any, currentPage: any, pageSize: any): any => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;

    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    let getInitialData = pagination(
      userStories,
      userStoriesCurrentPage,
      userStoriesPageSize,
    );
    setUserStoriesRenderedData(getInitialData);

    // userPosts
    let getInitialDataPosts = pagination(
      userPosts,
      userPostsCurrentPage,
      userPostsPageSize,
    );
    setUserPostsRenderedData(getInitialDataPosts);
  }, []);

  const userStories = [
    {
      firstName: 'John',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Jane',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Joe',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'David',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'James',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Theme',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Max',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Matrix',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Chip',
      id: 10,
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'John',
      lastName: 'Doe',
      location: 'New York',
      likes: 100,
      comments: 50,
      bookmarks: 20,
      id: 1,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Max',
      lastName: 'Johnson',
      location: 'Los Angeles',
      likes: 200,
      comments: 100,
      bookmarks: 40,
      id: 2,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      location: 'San Francisco',
      likes: 300,
      comments: 150,
      bookmarks: 60,
      id: 3,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'David',
      lastName: 'Smith',
      location: 'Chicago',
      likes: 400,
      comments: 200,
      bookmarks: 80,
      id: 4,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'James',
      lastName: 'Johnson',
      location: 'Miami',
      likes: 500,
      comments: 250,
      bookmarks: 100,
      id: 5,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      lastName: 'Smith',
      location: 'Seattle',
      likes: 600,
      comments: 300,
      bookmarks: 120,
      id: 6,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Joe',
      lastName: 'Doe',
      location: 'Las Vegas',
      likes: 700,
      comments: 350,
      bookmarks: 140,
      id: 7,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Theme',
      lastName: 'Johnson',
      location: 'Dallas',
      likes: 800,
      comments: 400,
      bookmarks: 160,
      id: 8,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Matrix',
      lastName: 'Smith',
      location: 'Houston',
      likes: 900,
      comments: 450,
      bookmarks: 180,
      id: 9,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Chip',
      lastName: 'Doe',
      location: 'Austin',
      likes: 1000,
      comments: 500,
      bookmarks: 200,
      id: 10,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={homeStyles.header}>
                <Title title="Let's Explore" />
                <TouchableOpacity
                  style={homeStyles.messageIcon}
                  onPress={() => navigation.navigate(Routes.Profile)}>
                  <FontAwesomeIcon
                    size={scaleFontSize(20)}
                    icon={faEnvelope}
                    style={styles.fontAwesomeIcon}
                  />

                  <View style={homeStyles.messageNumberContainer}>
                    <Text style={homeStyles.messageNumber}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={homeStyles.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return null;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );

                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData((prevData: any) => [
                        ...prevData,
                        ...contentToAppend,
                      ]);
                    }
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={item => {
                    return (
                      <UserStory
                        firstName={item.item.firstName}
                        profileImage={item.item.profileImage}
                      />
                    );
                  }}
                />
              </View>
            </>
          }
          data={userPostsRenderedData}
          showsVerticalScrollIndicator
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return null;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );

            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData((prevData: any) => [
                ...prevData,
                ...contentToAppend,
              ]);
            }
          }}
          renderItem={item => {
            return (
              <View style={homeStyles.userPostContainer}>
                <UserPost
                  bookmarks={item.item.bookmarks}
                  comments={item.item.comments}
                  firstName={item.item.firstName}
                  image={item.item.image}
                  lastName={item.item.lastName}
                  likes={item.item.likes}
                  location={item.item.location}
                  key={item.item.id}
                  profileImage={item.item.profileImage}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  fontAwesomeIcon: {
    color: '#898DAE',
  },
});
