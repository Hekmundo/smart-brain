import FaceRecognitionActionTypes from './face-recognition.types';

export const detectFacesStart = (imageUrl) => ({
  type: FaceRecognitionActionTypes.DETECT_FACES_START,
  payload: imageUrl,
});

export const detectFacesSuccess = (faceBoxes) => ({
  type: FaceRecognitionActionTypes.DETECT_FACES_SUCCESS,
  payload: faceBoxes,
});

export const detectFacesFailure = (errorMessage) => ({
  type: FaceRecognitionActionTypes.DETECT_FACES_FAILURE,
  payload: errorMessage,
});

export const resetFaceBoxes = () => ({
  type: FaceRecognitionActionTypes.RESET_FACE_BOXES,
});

export const addDetectedUrl = (imageUrl) => ({
  type: FaceRecognitionActionTypes.ADD_DETECTED_URL,
  payload: imageUrl,
});

export const setImageUrl = (imageUrl) => ({
  type: FaceRecognitionActionTypes.SET_IMAGE_URL,
  payload: imageUrl,
});

export const resetFaceRecognition = () => ({
  type: FaceRecognitionActionTypes.RESET_FACE_RECOGNITION,
});
