import loadImgs from '../../constants/images';
import { imagesLoaded } from './actions';

const loadImages = () => async dispatch => {
  try {
    await loadImgs();
    dispatch(imagesLoaded(true));
  } catch (err) {
    dispatch(imagesLoaded(false));
    console.log(err);
  }
};

const loadAssets = () => async dispatch => {
  dispatch(loadImages());
};

export default {
  loadAssets,
};
