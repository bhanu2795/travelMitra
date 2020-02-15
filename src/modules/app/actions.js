import { createActions } from 'redux-actions';
import types from './types';

export const { imagesLoaded, isLoading } = createActions(types.IMAGES_LOADED, types.IS_LOADING);
