import screens from '../../constants/screens';
import { Profile } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Profile]: {
    screen: Profile,
    headerMode: 'screen',
    navigationOptions: headerOptions(),
  },
};

export default Routes;
