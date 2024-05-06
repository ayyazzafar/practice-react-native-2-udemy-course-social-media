import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

export default StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    marginTop: 6,
    color: '#022150',
    textAlign: 'center',
  },
});
