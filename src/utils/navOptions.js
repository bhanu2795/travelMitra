import React from 'react';
import { View } from 'react-native';
import { PropsProxyHOC, DrawerIcon } from '../components';
import styles from '../styles/AppStyles';


const navOptions = ({ title, icon }) => ({
  navigationOptions: {
    title,
    headerTitle: <View style={styles.logoContainer}></View>,
    tabBarIcon: PropsProxyHOC(DrawerIcon, { name: icon }),
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerBackTitle: null,
  },
});

export default navOptions;
