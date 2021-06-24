import FaceRecognitionActionTypes from './face-recognition.types';

const INITIAL_STATE = {
  imageUrl: '',
  faceBoxes: [],
  detectedUrls: [],
  errorMessage: undefined,
};

const faceRecognitionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FaceRecognitionActionTypes.DETECT_FACES_SUCCESS:
      return {
        ...state,
        faceBoxes: action.payload,
        errorMessage: undefined,
      };
    case FaceRecognitionActionTypes.DETECT_FACES_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case FaceRecognitionActionTypes.ADD_DETECTED_URL:
      return {
        ...state,
        detectedUrls: [...state.detectedUrls, action.payload],
      };
    case FaceRecognitionActionTypes.RESET_FACE_BOXES:
      return {
        ...state,
        faceBoxes: [],
      };
    case FaceRecognitionActionTypes.SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.payload,
      };
    case FaceRecognitionActionTypes.RESET_FACE_RECOGNITION:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default faceRecognitionReducer;
