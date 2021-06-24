import React from 'react';
import Logo from '../../components/logo/logo.component';
import Rank from '../../components/rank/rank.component';
import ImageLinkForm from '../../components/image-link-form/image-link-form.component';
import FaceRecognition from '../../components/face-recognition/face-recognition.component';

const HomePage = () => (
  <div>
    <Logo />
    <Rank />
    <ImageLinkForm />
    <FaceRecognition />
  </div>
);

export default HomePage;
