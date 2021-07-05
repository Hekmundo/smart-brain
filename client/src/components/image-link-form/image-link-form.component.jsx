import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  detectFacesStart,
  setImageUrl,
} from '../../redux/face-recognition/face-recognition.actions';
import { selectImageUrl } from '../../redux/face-recognition/face-recognition.selectors';
import './image-link-form.styles.css';

const ImageLinkForm = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector(selectImageUrl);

  return (
    <div>
      <p className='mh3 instructions'>
        {'This Magic Brain will detect faces in your pictures. Give it a try'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input
            className='pa2 w-70 center url-input'
            type='text'
            placeholder='enter image URL'
            onChange={(event) => dispatch(setImageUrl(event.target.value))}
          />
          <button
            className='w-30 grow link dib white bg-light-purple detect-button'
            onClick={() => dispatch(detectFacesStart(imageUrl))}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
