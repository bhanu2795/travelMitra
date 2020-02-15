import React from 'react';
import { View, SafeAreaView, TouchableOpacity, ImageBackground, CheckBox } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import T from 'prop-types';
import s from './styles';
import { Button, Input, Text } from '../../components';
import { colors } from '../../styles';
import bg from '../../assets/images/bg.png';

const Login = ({
    signinData,
    setSigninData,
    login,
    navigation,
    inputRefs,
    username,
    password,
    ...props
}) => (
        <LinearGradient colors={['#A3A1FF', '#3A3897']} style={s.root}>
            <ImageBackground source={bg} style={s.imageBackground} keyboardShouldPersistTaps={'handled'}>
                <SafeAreaView />
                <View style={s.root}>
                    <View style={s.loginContainer}>
                        <View style={s.container}>
                            <Text style={[s.title, s.text]}>Travel</Text><Text style={[s.title, { color: '#3A3897' }]}>Mitra</Text>
                        </View>
                        <View style={s.form}>
                            <View style={s.input}>
                                <Input
                                    isValid={username.isValid}
                                    error={!username.isValid ? 'Enter Valid Username' : null}
                                    placeholder={'Username'}
                                    maxLength={30}
                                    autoCapitalize={'none'}
                                    secondContainerStyle={s.secondContainerStyle}
                                    onChangeText={(text) => { signinData.username = text; setSigninData(signinData); }}
                                    containerStyle={s.noteContainer}
                                    value={signinData.username}
                                    returnKeyType={'next'}
                                    onSubmitEditing={() => { inputRefs.password.focus(); }}
                                />
                            </View>
                            <View style={s.input}>
                                <Input
                                    isValid={password.isValid}
                                    error={!password.isValid ? 'Password length should be greater then 6' : null}
                                    placeholder={'PASSWORD'}
                                    maxLength={30}
                                    autoCapitalize={'none'}
                                    secondContainerStyle={s.secondContainerStyle}
                                    onChangeText={(text) => { signinData.password = text; setSigninData(signinData); }}
                                    containerStyle={s.noteContainer}
                                    value={signinData.password}
                                    secureTextEntry={true}
                                    returnKeyType={'done'}
                                    inputRef={(input) => { inputRefs.password = input }}
                                    keyboardType={'default'}
                                />
                            </View>
                            <View style={s.formOptions}>
                                <View style={s.rememberContainer}>
                                    <CheckBox
                                        value={false}
                                        color={'#148BEE'}
                                    // onValueChange={(text) => { registerData.checked = text; setRegisterData(registerData); }}
                                    />
                                    <Text style={[s.rememberText, s.text]}>Remember me</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => alert('Forget Clicked')}>
                                        <Text style={s.forgetText}>Forget Password?</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={s.formOptions}>
                                <Button secondaryOpacity backgroundColor={'#302070'} titleStyle={s.btnText} disabled={!(username.isValid && password.isValid)} containerStyle={[s.loginBtn, { marginRight: 10 }]} title={'SIGN IN'} onPress={() => login(signinData)} />
                                <Button secondaryOpacity backgroundColor={'#813AB7'} titleStyle={s.btnText} containerStyle={s.loginBtn} title={'SIGN UP'} onPress={() => navigation.navigate('Register')} />
                            </View>
                        </View>
                        <View style={s.other}>
                            <View>
                                <Text style={s.text}>Or login with</Text>
                            </View>
                            <View style={s.contact}>
                                <TouchableOpacity onPress={() => alert('facebook Clicked')}>
                                    <View style={s.iconContainer}>
                                        <FontAwesome name={'facebook-f'} style={s.icons} size={25} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('twitter Clicked')}>
                                    <View style={s.iconContainer}>
                                        <FontAwesome name={'twitter'} style={s.icons} size={25} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('instagram Clicked')}>
                                    <View style={s.iconContainer}>
                                        <FontAwesome name={'instagram'} style={s.icons} size={25} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => alert('google Clicked')}>
                                    <View style={s.iconContainer}>
                                        <FontAwesome name={'google-plus'} style={s.icons} size={25} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </LinearGradient>
    );

Login.navigationOptions = ({
    header: null
});

Login.propTypes = {
    signinData: T.object.isRequired,
    setSigninData: T.func.isRequired,
    login: T.func.isRequired,
    navigation: T.object.isRequired,
    inputRefs: T.object.isRequired,
    username: T.object.isRequired,
    password: T.object.isRequired
};

export default Login;