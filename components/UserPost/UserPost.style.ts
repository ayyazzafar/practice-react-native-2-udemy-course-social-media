import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

export default StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  userTextContainer: {
    justifyContent: 'center',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  userPostContainer: {
    marginTop: 35,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#EFF2F6',
  },
});
