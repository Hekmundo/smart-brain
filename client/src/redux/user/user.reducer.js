import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: undefined,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.REGISTER_FAILURE:
    case UserActionTypes.UPDATE_ENTRIES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
      };
    case UserActionTypes.UPDATE_ENTRIES_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          entries: action.payload,
        },
        errorMessage: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;
