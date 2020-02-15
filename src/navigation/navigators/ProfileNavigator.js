import { createStackNavigator } from 'react-navigation-stack';
import ProfileRoutes from '../routes/ProfileRoutes';
import navOptions from '../../utils/navOptions';

const ProfileNavigator = createStackNavigator(ProfileRoutes, {
  ...navOptions({
    title: 'Profile',
    icon: 'bullseye',
  }),
});

export default ProfileNavigator;
