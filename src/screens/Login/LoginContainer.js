import { ToastAndroid, Platform, Keyboard, Alert } from 'react-native';
import { connect } from 'react-redux';
import { compose, hoistStatics, withProps, withHandlers, withState, lifecycle } from 'recompose';
import LoginScreenView from './LoginScreenView';
import screens from '../../constants/screens';
import { settingOperations } from '../../modules/settings';
import { appOperations } from '../../modules/app';
import { withLoading } from '../../utils/enhancers';
import { shallowCompare } from '../../utils/utils';

const withValidation = withProps(({ signinData }) => ({
    email: {
        isValid: !!signinData.email && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(signinData.email)
    },
    password: {
        isValid: !!signinData.password && signinData.password.length > 6
    }
}));

const mapStateToProps = ({ settings, app }) => ({
    user: settings.user,
    isSignedIn: settings.isSignedIn,
    isLoading: app.isLoading
});

const goTabRouter = ({ navigation }) => {
    navigation.navigate(screens.TabsRoot);
};

const enhance = compose(
    connect(mapStateToProps, { ...settingOperations, ...appOperations }),
    withState('signinData', 'setSigninData', {
        email: '',
        password: ''
    }),
    withState('inputRefs', 'setInputRefs', {
        password: ''
    }),
    withProps(props => ({
        setSigninData: (data) => props.setSigninData(data),
    })),
    withHandlers({
        login: props => async (data) => {
            Keyboard.dismiss();
            // await props.toggleLoading(true);
            const payload = await props.checkSettings(data);
            await setTimeout(async () => {
                // await props.toggleLoading(false);
                if (Platform.OS === 'android') {
                    ToastAndroid.show(payload.message, ToastAndroid.SHORT);
                } else {
                    if (!payload.isSuccess) {
                        Alert.alert(
                            'Bexchange Login',
                            payload.message,
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                { text: 'OK', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false });
                    }
                }
                if (payload.isSuccess) {
                    goTabRouter(props);
                }
            }, 900);
        }
    }),
    withValidation,
    // withLoading(),
    lifecycle({
        componentDidMount() {
            if (this.props.isSignedIn) {
                goTabRouter(this.props);
            }
        },
        componentWillUnmount() {
            this.props.setSigninData({
                email: '',
                password: ''
            })
        },
        shouldComponentUpdate(nextProps, nextState) {
            return shallowCompare(this, nextProps, nextState);
        }
    })
);

export default hoistStatics(enhance)(LoginScreenView);
