import UserActionTypes from './user.types';

export const signInStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (errorMessage) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: errorMessage,
});

export const signOut = () => ({
  type: UserActionTypes.SIGN_OUT,
});

export const registerStart = (userCredentials) => ({
  type: UserActionTypes.REGISTER_START,
  payload: userCredentials,
});

export const registerSuccess = (user) => ({
  type: UserActionTypes.REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (errorMessage) => ({
  type: UserActionTypes.REGISTER_FAILURE,
  payload: errorMessage,
});

export const updateEntriesSuccess = (entryCount) => ({
  type: UserActionTypes.UPDATE_ENTRIES_SUCCESS,
  payload: entryCount,
});

export const updateEntriesFailure = (errorMessage) => ({
  type: UserActionTypes.UPDATE_ENTRIES_FAILURE,
  payload: errorMessage,
});
