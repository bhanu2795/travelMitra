
import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
// import Logo from '../Logo';

import DrawerNavigatorItems from './components/DrawerNavigatorItems';
import { dimensions, colors } from '../../styles';

const styles = StyleSheet.create({
    titleContainerStyle: {
        height: Platform.OS === 'android' ? 66 : 86,
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
        paddingLeft: dimensions.indent * 1.5,
        paddingBottom: dimensions.indent,
    },
});

const Drawer = props => (
    <View>
        <View style={styles.titleContainerStyle}>
            <Text>Logo</Text>
        </View>
        <DrawerNavigatorItems {...props} />
    </View>
);

export default Drawer;