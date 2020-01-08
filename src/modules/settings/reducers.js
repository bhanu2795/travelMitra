import { handleActions } from 'redux-actions';
import types from './types';


const initialState = {
  user: null,
  isSignedIn: false,
  isInstallApp: false
};

const settingsReducer = handleActions({
  [types.SIGN_IN]: (state, { payload }) => ({
    ...state,
    user: payload.isSuccess ? payload : null,
    isSignedIn: payload.isSuccess ? true : false
  }),
  [types.LOGOUT]: (state) => ({
    ...state,
    user: null,
    isSignedIn: false
  }),
  [types.IS_INSTALL_APP]: (state, { payload }) => ({
    ...state,
    isInstallApp: payload,
  })
}, initialState);

export default settingsReducer;
