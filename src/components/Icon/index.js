import React from 'react';
import { TouchableOpacity, View, ViewPropTypes, Text } from 'react-native';
import PropTypes from 'prop-types';
import R from 'ramda';
import { colors } from '../../styles';

const Icon = (props) => {
    const {
        containerStyle, onPress, color, children, ...icon
    } = props;
    const Root = R.is(Function, onPress) ? TouchableOpacity : View;

    return (
        <Root
            onPress={onPress}
            style={containerStyle}
        >
            {children}
            {/* <SvgIcon
                width={14}
                height={14}
                fill={color || colors.icon}
                {...icon}
                svgs={svgs}
            /> */}
        </Root>
    );
};

Icon.propTypes = {
    containerStyle: ViewPropTypes.style,
    color: PropTypes.string,
    onPress: PropTypes.func,
};

export default Icon;