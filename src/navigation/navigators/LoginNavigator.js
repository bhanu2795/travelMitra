import { createStackNavigator } from 'react-navigation-stack';
import LoginRoutes from '../routes/LoginRoutes';
import navOptions from '../../utils/navOptions';

const LoginNavigator = createStackNavigator(LoginRoutes, {
  ...navOptions({
    title: 'Login',
    // icon: 'random',
  }),
});

export default LoginNavigator;
