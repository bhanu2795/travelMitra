import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import screens from '../../constants/screens';
import { LoginNavigator } from '../navigators';
import NavigatorDrawer from '../NavigatorDrawer';
import config from '../../utils/transitionConfig';

const AppStack = createStackNavigator({
    [screens.DrawerRoot]: {
        screen: NavigatorDrawer,
        navigationOptions: {
            header: null
        }
    }
}, config);

const AuthStack = createStackNavigator({
    [screens.SignInRoot]: {
        screen: LoginNavigator,
        navigationOptions: {
            header: null
        }
    }
}, config);

const RootNavigator = createAppContainer(
    createSwitchNavigator(
        {
            [screens.App]: AppStack,
            [screens.Auth]: AuthStack
        },
        {
            initialRouteName: screens.App,
        }
    )
);

export default RootNavigator;