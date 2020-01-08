import React from 'react';
import { View, CheckBox, SafeAreaView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import T from 'prop-types';
import s from './styles';
import { Button, Input, Text, KeyboardAvoidingView } from '../../components';
import { colors } from '../../styles';
import bg from '../../assets/images/bg.png';

const Register = ({
    registerData,
    setRegisterData,
    register,
    navigation,
    keyBoard,
    inputRefs,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    mobileNumber,
    phoneCode,
    ...props
}) => (
        <LinearGradient colors={['#A3A1FF', '#3A3897']} style={s.root}>
            <ImageBackground source={bg} keyboardShouldPersistTaps={'handled'} style={s.imageBackground}>
                <SafeAreaView />
                <View style={s.root}>
                    <View style={s.registerContainer}>
                        <KeyboardAvoidingView behavior={'height'} keyboardVerticalOffset={300} enabled={keyBoard}>
                            <View style={s.container}>
                                <Text style={[s.title, s.text]}>Travel</Text><Text style={[s.title, { color: '#3A3897' }]}>Mitra</Text>
                            </View>
                            <View style={s.form}>
                                <View style={s.rowInputs}>
                                    <View style={[s.twoInputs, { marginRight: 5 }]}>
                                        <Input
                                            isValid={firstName.isValid}
                                            error={!firstName.isValid ? 'Enter Only Letters' : null}
                                            placeholder={'First Name'}
                                            maxLength={30}
                                            secondContainerStyle={s.secondContainerStyle}
                                            value={registerData.firstName}
                                            returnKeyType={'next'}
                                            onChangeText={(text) => { registerData.firstName = text; setRegisterData(registerData); }}
                                            containerStyle={s.noteContainer}
                                            onSubmitEditing={() => { inputRefs.lastName.focus(); }}
                                        />
                                    </View>
                                    <View style={s.twoInputs}>
                                        <Input
                                            isValid={lastName.isValid}
                                            error={!lastName.isValid ? 'Enter Only Letters' : null}
                                            placeholder={'Last Name'}
                                            maxLength={30}
                                            secondContainerStyle={s.secondContainerStyle}
                                            value={registerData.lastName}
                                            returnKeyType={'next'}
                                            onChangeText={(text) => { registerData.lastName = text; setRegisterData(registerData); }}
                                            containerStyle={s.noteContainer}
                                            inputRef={(input) => { inputRefs.lastName = input }}
                                            onSubmitEditing={() => { inputRefs.email.focus(); }}
                                        />
                                    </View>
                                </View>
                                <View style={s.input}>
                                    <Input
                                        isValid={email.isValid}
                                        error={!email.isValid ? 'Enter Valid Email' : null}
                                        placeholder={'Email'}
                                        value={registerData.email}
                                        keyboardType={'email-address'}
                                        returnKeyType={'next'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { registerData.email = text; setRegisterData(registerData); }}
                                        containerStyle={s.noteContainer}
                                        inputRef={(input) => { inputRefs.email = input }}
                                        onSubmitEditing={() => { inputRefs.password.focus(); }}
                                    />
                                </View>
                                <View style={s.input}>
                                    <Input
                                        isValid={password.isValid}
                                        error={!password.isValid ? 'Password length should be greater then 6' : null}
                                        placeholder={'Password'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        value={registerData.password}
                                        returnKeyType={'next'}
                                        secureTextEntry={true}
                                        onChangeText={(text) => { registerData.password = text; setRegisterData(registerData); }}
                                        containerStyle={s.noteContainer}
                                        inputRef={(input) => { inputRefs.password = input }}
                                        onSubmitEditing={() => { inputRefs.confirmPassword.focus(); }}
                                    />
                                </View>
                                <View style={s.input}>
                                    <Input
                                        isValid={confirmPassword.isValid}
                                        error={!confirmPassword.isValid ? 'Password Not Match' : null}
                                        placeholder={'Confirm Password'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        value={registerData.confirmPassword}
                                        returnKeyType={'next'}
                                        secureTextEntry={true}
                                        onChangeText={(text) => { registerData.confirmPassword = text; setRegisterData(registerData); }}
                                        containerStyle={s.noteContainer}
                                        inputRef={(input) => { inputRefs.confirmPassword = input }}
                                        onSubmitEditing={() => { inputRefs.phoneCode.focus(); }}
                                    />
                                </View>
                                <View style={s.rowInputs}>
                                    <View style={[s.codeInput, { marginRight: 5 }]}>
                                        <Input
                                            isValid={phoneCode.isValid}
                                            // error={!phoneCode.isValid ? 'Enter Valid Phone Code' : null}
                                            placeholder={'Phone Code'}
                                            value={registerData.phoneCode}
                                            secondContainerStyle={s.secondContainerStyle}
                                            returnKeyType={'done'}
                                            onChangeText={(text) => { registerData.phoneCode = text; setRegisterData(registerData); }}
                                            containerStyle={s.noteContainer}
                                            keyboardType={'phone-pad'}
                                            leftIconStyle={s.iconStyle}
                                            inputRef={(input) => { inputRefs.phoneCode = input }}
                                            onSubmitEditing={() => { inputRefs.mobileNumber.focus(); }}
                                        />
                                    </View>
                                    <View style={s.phoneInput}>
                                        <Input
                                            isValid={mobileNumber.isValid}
                                            error={!mobileNumber.isValid ? 'Enter Valid Number' : null}
                                            placeholder={'Phone No'}
                                            value={registerData.mobileNumber}
                                            secondContainerStyle={s.secondContainerStyle}
                                            returnKeyType={'done'}
                                            onChangeText={(text) => { registerData.mobileNumber = text; setRegisterData(registerData); }}
                                            containerStyle={s.noteContainer}
                                            keyboardType={'phone-pad'}
                                            inputRef={(input) => { inputRefs.mobileNumber = input }}
                                        />
                                    </View>
                                </View>

                                <View style={s.formOptions}>
                                    <View style={s.textButton}>
                                        <CheckBox
                                            value={registerData.checked}
                                            onValueChange={(text) => { registerData.checked = text; setRegisterData(registerData); }}
                                        />
                                        <Text style={[s.text, s.bold]}>
                                            I have read and agree <Text style={{ color: '#148BEE' }}> Terms of Services</Text>
                                        </Text>
                                    </View>
                                </View>
                                <View style={s.formOptions}>
                                    <Button secondaryOpacity backgroundColor={'#302070'} titleStyle={s.btnText} disabled={!(firstName.isValid && lastName.isValid && email.isValid && password.isValid && confirmPassword.isValid && mobileNumber.isValid && phoneCode.isValid)} containerStyle={[s.signinBtn, { marginRight: 10 }]} title={'SIGN UP'} onPress={() => register(registerData)} />
                                    <Button secondaryOpacity backgroundColor={'#813AB7'} titleStyle={s.btnText} containerStyle={s.signinBtn} title={'SIGN IN'} onPress={() => navigation.navigate('Login')} />
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </ImageBackground>
        </LinearGradient>
    );

Register.navigationOptions = ({
    header: null,
});

Register.propTypes = {
    registerData: T.object.isRequired,
    setRegisterData: T.func.isRequired,
    register: T.func.isRequired,
    navigation: T.object.isRequired,
    keyBoard: T.bool.isRequired,
    inputRefs: T.object.isRequired,
    firstName: T.object.isRequired,
    lastName: T.object.isRequired,
    email: T.object.isRequired,
    password: T.object.isRequired,
    confirmPassword: T.object.isRequired,
    mobileNumber: T.object.isRequired,
    phoneCode: T.object.isRequired,
    props: T.object
};

export default Register;