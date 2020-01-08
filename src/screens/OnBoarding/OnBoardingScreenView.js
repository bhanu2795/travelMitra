import React from 'react';
import { View, SafeAreaView } from 'react-native';
import T from 'prop-types';
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

import s from './styles';
import { Text } from '../../components';

import anim1 from '../../assets/anim/1.json';
import anim2 from '../../assets/anim/2.json';
import anim3 from '../../assets/anim/3.json';

const slides = [{
    key: 'somethun',
    title: 'Quick setup, good defaults',
    source: anim1,
    text: 'Description.\nSay something cool',
    colors: ['#63E2FF', '#B066FE']
}, {
    key: 'somethun-dos',
    title: 'Super customizable',
    source: anim2,
    text: 'Other cool stuff',
    colors: ['#A3A1FF', '#3A3897']
}, {
    key: 'somethun1',
    title: 'No need to buy me beer',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    source: anim3,
    colors: ['#A3A1FF', '#3A3897']
}];

_renderItem = ({ item }) => {
    return (
        <LinearGradient colors={item.colors} style={s.slide}>
            <SafeAreaView />
            <View style={s.animContainer}>
                <LottieView
                    source={item.source}
                    autoPlay loop
                />
            </View>
            <View>
                <Text style={s.title}>{item.title}</Text>
                <Text style={s.text}>{item.text}</Text>
            </View>
        </LinearGradient>
    );
}

const OnBoarding = ({
    navigate,
    _onDone,
    ...props
}) => <AppIntroSlider renderItem={_renderItem} slides={slides} onDone={_onDone} bottomButton />;

OnBoarding.navigationOptions = ({
    header: null
});

OnBoarding.propTypes = {
    navigate: T.func,
    _onDone: T.func
};

export default OnBoarding;