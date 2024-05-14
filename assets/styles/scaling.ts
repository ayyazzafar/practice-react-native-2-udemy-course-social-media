import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {width, height} = Dimensions.get('window');

const isSmall = width < 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
};

const horizontalScale = (size: number) => (width / guidelineBaseWidth()) * size;
