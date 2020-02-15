import { createStackNavigator } from 'react-navigation-stack';
import HomeRoutes from '../routes/HomeRoutes';
import navOptions from '../../utils/navOptions';

const HomeNavigator = createStackNavigator(HomeRoutes, {
    ...navOptions({
        title: 'Home',
        icon: 'random',
    }),
});

export default HomeNavigator;
