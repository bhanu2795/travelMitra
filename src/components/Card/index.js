import {
  compose,
  withProps
} from 'recompose';
import Card from './Card';
import { withToggle } from '../../utils/enhancers';

/**
 * velue must be only string, not Number!
 */
const enhance = compose(
  withProps(({ th, records, title }) => ({
    th: th,
    records: records,
    title: title
  })),
  withToggle('isFocus', 'setFocus', 'onToggleFocus')
);

export default enhance(Card);
