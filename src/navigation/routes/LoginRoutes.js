import screens from '../../constants/screens';
import { Login, Register, Verify } from '../../screens';

const Routes = {
  [screens.Login]: {
    screen: Login
  },
  [screens.Register]: {
    screen: Register
  },
  [screens.Verify]: {
    screen: Verify
  }
};

export default Routes;
