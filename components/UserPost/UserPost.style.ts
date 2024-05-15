import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

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
    fontSize: scaleFontSize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
    width: '100%',
  },
  userPostContainer: {
    marginTop: verticalScale(35),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(20),
    borderBottomColor: '#EFF2F6',
  },
  userPostStats: {
    marginLeft: horizontalScale(10),
    flexDirection: 'row',
    gap: 30,
  },
  userPostStatButton: {flexDirection: 'row', gap: 3},
  userPostStatText: {
    color: '#79869F',
  },
});
