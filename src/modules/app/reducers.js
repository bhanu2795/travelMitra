import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isImagesLoaded: false,
};

const authReducer = handleActions(
  {
    [types.IMAGES_LOADED]: (state, { payload }) => ({
      ...state,
      isImagesLoaded: payload,
    }),
  },
  initialState,
);

export default authReducer;
