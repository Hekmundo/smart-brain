import { takeLatest, select, call, all, put } from 'redux-saga/effects';
import FaceRecognitionActionTypes from './face-recognition.types';
import UserActionTypes from '../user/user.types';
import { selectDetectedUrls } from './face-recognition.selectors';
import {
  addDetectedUrl,
  detectFacesSuccess,
  detectFacesFailure,
  resetFaceBoxes,
  resetFaceRecognition,
} from './face-recognition.actions';
import { getFaceBoxes } from './face-recognition.utils';
import { apiFetch } from '../api/api.utils';

function* submitImage({ payload }) {
  const imageUrl = payload;

  try {
    yield put(resetFaceBoxes());

    const data = yield call(apiFetch, 'imageUrl', 'post', { input: imageUrl });
    const detectedUrls = yield select(selectDetectedUrls);

    if (
      data &&
      data !== 'unable to work with API' &&
      !detectedUrls.includes(imageUrl)
    ) {
      yield put(addDetectedUrl(imageUrl));
    }

    const faceBoxes = yield call(getFaceBoxes, data);
    yield put(detectFacesSuccess(faceBoxes));
  } catch (error) {
    yield put(detectFacesFailure(error.message));
  }
}

function* resetState() {
  yield put(resetFaceRecognition());
}

function* onDetectFacesStart() {
  yield takeLatest(FaceRecognitionActionTypes.DETECT_FACES_START, submitImage);
}

function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT, resetState);
}

export default function* faceRecognitionSagas() {
  yield all([call(onDetectFacesStart), call(onSignOut)]);
}
