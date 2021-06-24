import { all, call } from 'redux-saga/effects';
import faceRecognitionSagas from './face-recognition/face-recognition.sagas';
import userSagas from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(faceRecognitionSagas)]);
}
