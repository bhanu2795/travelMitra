import { Keyboard } from 'react-native';
import {
    compose,
    hoistStatics,
    withHandlers,
    lifecycle,
    withState,
    withProps
} from 'recompose';
import { connect } from 'react-redux';
import RegisterScreenView from './RegisterScreenView';
import { settingOperations } from '../../modules/settings';

const withValidation = withProps(({ registerData }) => ({
    firstName: {
        isValid: !!registerData.firstName && /^[A-Z]+$/i.test(registerData.firstName)
    },
    lastName: {
        isValid: !!registerData.lastName && /^[A-Z]+$/i.test(registerData.lastName)
    },
    email: {
        isValid: !!registerData.email && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(registerData.email)
    },
    password: {
        isValid: !!registerData.password && registerData.password.length > 6
    },
    confirmPassword: {
        isValid: registerData.password === registerData.confirmPassword
    },
    mobileNumber: {
        isValid: !!registerData.mobileNumber && /^((\+){1}91){1}[1-9]{1}[0-9]{9}$/.test(registerData.phoneCode + registerData.mobileNumber)
    },
    phoneCode: {
        isValid: !!registerData.phoneCode && registerData.phoneCode.length
    }
}));

const enhance = compose(
    connect(null, { ...settingOperations }),
    withState('registerData', 'setRegisterData', {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
        phoneCode: '+91'
    }),
    withState('inputRefs', 'setInputRefs', {
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
        phoneCode: '+91'
    }),
    withState('keyBoard', 'setKeyBoard', false),
    withHandlers({
        register: props => (data) => {
            props.registerUser(data)
        },
        _keyboardDidShow: props => () => {
            props.setKeyBoard(true);
        },
        _keyboardDidHide: props => () => {
            props.setKeyBoard(false);
        }
    }),
    withProps(props => ({
        setRegisterData: (data) => props.setRegisterData(data)
    })),
    withValidation,
    lifecycle({
        UNSAFE_componentWillMount() {
            this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.props._keyboardDidShow);
            this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.props._keyboardDidHide);
        },
        componentWillUnmount() {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }
    })
);

export default hoistStatics(enhance)(RegisterScreenView);