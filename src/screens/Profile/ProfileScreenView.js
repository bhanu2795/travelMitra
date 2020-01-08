import React from 'react';
// import T from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import screens from '../../constants/screens';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { FormInput, Input, VerticalSeparator, Text } from '../../components';
import s from './styles';

const onNavigate = (nav, screen, params) => () => nav.navigate(screen, params);

const Profile = ({
    // onSignIn,
}) => (
        <View style={s.root}>
            <SafeAreaView />
            <View style={s.screenContainer}>
                <View style={[s.profilePicContainer, s.center]}>
                    <View style={[s.shadow, s.circle, s.center]}>
                        <Feather name={'camera'} size={45}/>
                    </View>
                    <Text>Change Photo</Text>
                </View>
                <View style={s.detailContainer}>
                    <Input
                        isValid
                        placeholder={'EMAIL'}
                        autoCapitalize={'none'}
                        value={'test@test.com'}
                        // onChangeText={(text) => { this.props.signinData.email = text; this.props.setSigninData(this.props.signinData); }}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                    />
                    <VerticalSeparator />
                    <Input
                        isValid
                        placeholder={'EMAIL'}
                        autoCapitalize={'none'}
                        value={'7824242424'}
                        // onChangeText={(text) => { this.props.signinData.email = text; this.props.setSigninData(this.props.signinData); }}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                    />
                    <VerticalSeparator />
                    <Input
                        isValid
                        placeholder={'EMAIL'}
                        autoCapitalize={'none'}
                        value={'Gurugram'}
                        // onChangeText={(text) => { this.props.signinData.email = text; this.props.setSigninData(this.props.signinData); }}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                    />
                    <VerticalSeparator />
                    <Input
                        isValid
                        placeholder={'EMAIL'}
                        autoCapitalize={'none'}
                        value={'4424 2342 2342 2352'}
                        // onChangeText={(text) => { this.props.signinData.email = text; this.props.setSigninData(this.props.signinData); }}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                    />
                    <VerticalSeparator />
                    <Input
                        isValid
                        placeholder={'EMAIL'}
                        autoCapitalize={'none'}
                        value={'test'}
                        // onChangeText={(text) => { this.props.signinData.email = text; this.props.setSigninData(this.props.signinData); }}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                    />
                </View>
            </View>
        </View>
    );

Profile.navigationOptions = ({ navigation }) => ({
    headerLeft: (
        <TouchableOpacity
            onPress={onNavigate(navigation, screens.Login, { title: 'Add transfer' })}
        >
            <Feather
                name={'chevron-left'}
                size={25}
                color={'#000'}
            />
        </TouchableOpacity>
    ),
    headerRight: (
        <TouchableOpacity
            onPress={onNavigate(navigation, screens.Login, { title: 'Add transfer' })}
        >
            <Feather
                name={'log-out'}
                size={25}
                color={'#000'}
            />
        </TouchableOpacity>
    ),
    headerRightContainerStyle: {
        paddingHorizontal: 10,
    },
    headerLeftContainerStyle: {
        paddingHorizontal: 10,
    },
    headerTitleStyle: {
        textTransform: 'uppercase'
    },
    headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitleAllowFontScaling: true,
    title: 'profile'
});

Profile.propTypes = {
    // onSignIn: T.func,
};

export default Profile;