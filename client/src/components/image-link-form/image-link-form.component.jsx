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
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input
            className='f4 pa2 w-70 center'
            type='text'
            placeholder='enter image address'
            onChange={(event) => dispatch(setImageUrl(event.target.value))}
          />
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
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
