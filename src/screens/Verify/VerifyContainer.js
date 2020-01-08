import {connect} from 'react-redux';
import {compose, hoistStatics} from 'recompose';
import VerifyScreenView from './VerifyScreenView';

const mapStateToProps = state => ({});

const enhance = compose(connect(mapStateToProps));

export default hoistStatics(enhance)(VerifyScreenView);
