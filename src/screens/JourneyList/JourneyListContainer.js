import { connect } from 'react-redux';
import { compose, hoistStatics, withHandlers } from 'recompose';
import JourneyListScreenView from './JourneyListScreenView';

const mapStateToProps = state => ({});

const enhance = compose(
    connect(mapStateToProps),
    withHandlers({
        _journeyHandler: props => () => {
            onNavigate(props.navigation, screens.Journey);
        }
    }),
);

export default hoistStatics(enhance)(JourneyListScreenView);
