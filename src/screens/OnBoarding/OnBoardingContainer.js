import {
    compose,
    hoistStatics,
    withHandlers,
    lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import { LayoutAnimation, UIManager } from 'react-native';
import OnBoardingScreenView from './OnBoardingScreenView';
import { settingOperations } from '../../modules/settings';
import screens from '../../constants/screens';

const mapStateToProps = ({ settings }) => ({
    isInstallApp: settings.isInstallApp
});

const onNavigate = (nav, screen, params) => nav.navigate(screen, params);

const enhance = compose(
    connect(mapStateToProps, { ...settingOperations }),
    withHandlers({
        _onDone: props => () => {
            props.isInstall();
            onNavigate(props.navigation, screens.Auth);
        }
    }),
    lifecycle({
        componentWillUnmount() {
            UIManager.setLayoutAnimationEnabledExperimental &&
                UIManager.setLayoutAnimationEnabledExperimental(true);

            LayoutAnimation.easeInEaseOut();
        },
        componentDidMount() {
            if (this.props.isInstallApp) {
                onNavigate(this.props.navigation, screens.Auth);
            }
        }
    })
);

export default hoistStatics(enhance)(OnBoardingScreenView);