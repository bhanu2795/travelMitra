import { connect } from 'react-redux';
import { compose, hoistStatics, withHandlers } from 'recompose';
import HomeScreenView from './HomeScreenView';
import screens from '../../constants/screens';

const mapStateToProps = state => ({});

const onNavigate = (nav, screen, params) => nav.navigate(screen, params);

const enhance = compose(
    connect(mapStateToProps),
    withHandlers({
        _viewMoreHandler: props => () => {
            onNavigate(props.navigation, screens.JourneyList, { title: 'Journey List' });
        },
        _journeyHandler: props => data => {
            onNavigate(props.navigation, screens.Journey, { data: data });
        }
    })
);

export default hoistStatics(enhance)(HomeScreenView);
