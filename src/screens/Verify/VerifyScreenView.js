import React from 'react';
// import T from 'prop-types';
import { View, Text } from 'react-native';
import s from './styles';

const Verify = ({
    // onSignIn,
}) => (
        <View style={s.root}>
            <Text>Verify</Text>
        </View>
    );

Verify.navigationOptions = ({
    header: null,
});

Verify.propTypes = {
    // onSignIn: T.func,
};

export default Verify;