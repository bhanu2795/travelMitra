import { createActions } from 'redux-actions';
import types from './types';

export const { signIn, logout, isInstallApp } = createActions(
  types.SIGN_IN,
  types.LOGOUT,
  types.IS_INSTALL_APP
);
