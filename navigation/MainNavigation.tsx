import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import {Routes} from './routes';

export default function MainNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
}
