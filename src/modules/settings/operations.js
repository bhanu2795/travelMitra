import {
  // signIn,
  // logout,
  isInstallApp
} from './actions';
import { postData } from '../../services';

const checkSettings = data => async (dispatch) => {
  // console.log("getState().settings.isSignedIn", getState().settings.user)
  // setTimeout(() => {if (getState().settings.isSignedIn) dispatch(signIn())}, 100)
  return await postData('api/v1/login', data).then(res => {
    dispatch(signIn(res));
    return res;
  }).catch(err => {
    console.log(err);
  });
  // dispatch(signIn())
  // if (getState().settings.isSignedIn) dispatch(ssignIn());
  // dispatch({ type: types.GO_TO_INITIAL_SCREEN });
};

const registerUser = data => async () => {
  postData('api/v1/register', data).then(res => {
    // console.log(res);
  }).catch(err => {
    console.log(err);
  });
};

const signOut = () => async (dispatch) => {
  dispatch(logout());
};

const isInstall = () => async (dispatch) => {
  dispatch(isInstallApp(true));
};

export default {
  signOut,
  checkSettings,
  registerUser,
  isInstall
};
