import React from 'react';
import T from 'prop-types';
import { TextInput, View, Image } from 'react-native';
import Text from '../Text';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles';

import s from './styles';

const Card = ({
  title,
  containerSize,
  children,
  ...props
}) => (
    <LinearGradient colors={['#A3A1FF', '#3A3897']} style={[s.containerStyle, s.shadow, containerSize ? containerSize : s.containerSize]}>
      {
        !!title &&
        <View>
          <Text style={s.titleText}>{title}</Text>
        </View>
      }
      <View>
        {children}
      </View>
    </LinearGradient>
  );

Card.propTypes = {
};

export default Card;
