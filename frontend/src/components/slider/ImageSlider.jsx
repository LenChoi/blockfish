import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { ImageSliderLayout, ListCardContentBottom } from '../../styles/Card';
import TextDefault from '../ui/TextDefault';
import HalfRating from '../ui/HalfRating';

const dummy = [
  {
    url: 'https://via.placeholder.com/600/d32776',
  },
  {
    url: 'https://via.placeholder.com/600/f66b97',
  },
  {
    url: 'https://via.placeholder.com/600/56a8c2',
  },
];

const ImageSlider = () => {
  const ImageInfoCardBottom = () => (
    <ImageSliderLayout>
      <div>
        <div>
          <TextDefault size="18px" color="#000">
            곰오디오
          </TextDefault>
        </div>
        <div>
          <TextDefault size="14px" lineHeight="25px" color="#808080">
            곰오디오는 싱크가사, 인터넷 라디오 방송 청취 등 멀티플레이에 강한 음악 프로그램입니다.
          </TextDefault>
        </div>
        <ListCardContentBottom>
          <HalfRating />
          <div style={{ marginLeft: 5 }}>
            <TextDefault size="14px" color="#808080">
              (
            </TextDefault>
            <TextDefault size="14px" color="#808080">
              commentNum
            </TextDefault>
            <TextDefault size="14px" color="#808080">
              )
            </TextDefault>
          </div>
        </ListCardContentBottom>
        <TextDefault size="14px" color="#00bfff">
          Free
        </TextDefault>
      </div>
    </ImageSliderLayout>
  );
  return (
    <div
      style={{
        display: 'inline-flex',
        marginTop: '50px',
        marginLeft: '50px',
        alignItems: 'center',
      }}
    >
      <div style={{ paddingRight: '20px' }}>
        <SimpleImageSlider
          width="400px"
          height="300px"
          images={dummy}
          showNavs="true"
          showBullets="true"
        />
        <ImageInfoCardBottom />
      </div>
      <br />
      <div>
        <SimpleImageSlider
          width="400px"
          height="300px"
          images={dummy}
          showNavs="true"
          showBullets="true"
        />
        <ImageInfoCardBottom />
      </div>
    </div>
  );
};

export default ImageSlider;
