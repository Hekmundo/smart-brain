import { takeLatest, select, call, all, put } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import FaceRecognitionActionTypes from '../face-recognition/face-recognition.types';
import {
  signInFailure,
  signInSuccess,
  registerFailure,
  registerSuccess,
  updateEntriesSuccess,
  updateEntriesFailure,
} from './user.actions';
import { selectCurrentUserId } from './user.selectors';
import { apiFetch } from '../api.utils';

function* signIn({ payload: { email, password } }) {
  try {
    const user = yield call(apiFetch, 'signin', 'post', { email, password });

    user.id
      ? yield put(signInSuccess(user))
      : yield put(signInFailure('No user found'));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* register({ payload: { email, name, password } }) {
  try {
    const user = yield call(apiFetch, 'register', 'post', {
      email,
      name,
      password,
    });

    user.id
      ? yield put(registerSuccess(user))
      : yield put(registerFailure("Couldn't register"));
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

function* updateEntries() {
  try {
    const id = yield select(selectCurrentUserId);
    const entryCount = yield call(apiFetch, 'image', 'put', { id });

    yield put(updateEntriesSuccess(entryCount));
  } catch (error) {
    yield put(updateEntriesFailure(error.message));
  }
}

function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

function* onRegisterStart() {
  yield takeLatest(UserActionTypes.REGISTER_START, register);
}

function* onAddDetectedUrl() {
  yield takeLatest(FaceRecognitionActionTypes.ADD_DETECTED_URL, updateEntries);
}

export default function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onRegisterStart),
    call(onAddDetectedUrl),
  ]);
}
