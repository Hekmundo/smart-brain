import { createSelector } from 'reselect';

const selectFaceRecognition = (state) => state.faceRecognition;

export const selectFaceBoxes = createSelector(
  [selectFaceRecognition],
  (faceRecognition) => faceRecognition.faceBoxes
);

export const selectDetectedUrls = createSelector(
  [selectFaceRecognition],
  (faceRecognition) => faceRecognition.detectedUrls
);

export const selectImageUrl = createSelector(
  [selectFaceRecognition],
  (faceRecognition) => faceRecognition.imageUrl
);
