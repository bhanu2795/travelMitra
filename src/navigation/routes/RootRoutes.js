import screens from '../../constants/screens';
import {
  ProfileNavigator,
  HomeNavigator
} from '../navigators';

const Routes = {
  [screens.HomeRoot]: {
    screen: HomeNavigator
  },
  [screens.ProfileRoot]: {
    screen: ProfileNavigator
  }
};

export default Routes;
