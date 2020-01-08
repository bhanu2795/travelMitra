import screens from '../../constants/screens';
import { Home, JourneyList, Journey } from '../../screens';

const Routes = {
    [screens.Home]: {
        screen: Home
    },
    [screens.JourneyList]: {
        screen: JourneyList
    },
    [screens.Journey]: {
        screen: Journey
    }
};

export default Routes;
