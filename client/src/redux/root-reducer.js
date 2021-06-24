import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import faceRecognitionReducer from './face-recognition/face-recognition.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  faceRecognition: faceRecognitionReducer,
});

export default rootReducer;
