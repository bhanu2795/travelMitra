import { connect } from 'react-redux';
import { compose, hoistStatics } from 'recompose';
import JourneyScreenView from './JourneyScreenView';
import { getParam } from '../../utils/navHelpers';

const mapStateToProps = (state, { navigation }) => ({
    data: getParam('data')(navigation)
});

const enhance = compose(connect(mapStateToProps));

export default hoistStatics(enhance)(JourneyScreenView);
