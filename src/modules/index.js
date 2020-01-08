import AsyncStorage from '@react-native-community/async-storage';
import { persistCombineReducers } from 'redux-persist';

import settings from './settings';

import app from './app';

const config = {
  key: 'root',
  whitelist: [
    'settings'
  ],
  storage: AsyncStorage,
};

const appReducer = {
  app,
  settings
};

export default persistCombineReducers(config, appReducer);
