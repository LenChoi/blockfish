import React from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import ImageSlider from '../../components/slider/ImageSlider';
import DownloadMain from '../../components/download/DownloadMain';

const Main = () => (
  <DefaultLayout>
    <ImageSlider />
    <DownloadMain />
  </DefaultLayout>
);

export default Main;
