import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

export default StyleSheet.create({
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: horizontalScale(3),
    borderRadius: 50,
  },
  image: {
    width: horizontalScale(65),
    height: 65,
    borderRadius: 50,
  },
});
