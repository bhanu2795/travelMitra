import loadImgs from '../../constants/images';
import { imagesLoaded, isLoading } from './actions';

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

const toggleLoading = show => async (dispatch) => {
  await dispatch(isLoading(show));
};

export default {
  loadAssets,
  toggleLoading
};
