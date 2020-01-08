import { createSwitchNavigator } from 'react-navigation';
import screens from '../constants/screens';
import { OnBoarding } from '../screens'
import { RootNavigator } from './navigators';


export default createSwitchNavigator({
  [screens.OnBoarding]: OnBoarding,
  [screens.Root]: RootNavigator
}, {
  initialRouteName: screens.OnBoarding
});
