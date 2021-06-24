import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectFaceBoxes,
  selectImageUrl,
} from '../../redux/face-recognition/face-recognition.selectors';
import './face-recognition.styles.css';

const FaceRecognition = () => {
  const faceBoxes = useSelector(selectFaceBoxes);
  const imageUrl = useSelector(selectImageUrl);

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          id='inputimage'
          alt=''
          src={imageUrl}
          width='500px'
          height='auto'
        />
        {faceBoxes.map((box, index) => {
          return (
            <div
              key={index}
              className='bounding-box'
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
