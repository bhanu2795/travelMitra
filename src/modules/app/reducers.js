import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isImagesLoaded: false,
  isLoading: false
};

const authReducer = handleActions(
  {
    [types.IMAGES_LOADED]: (state, { payload }) => ({
      ...state,
      isImagesLoaded: payload,
    }),
    [types.IS_LOADING]: (state, { payload }) => ({
      ...state,
      isLoading: payload
    })
  },
  initialState
);

export default authReducer;
