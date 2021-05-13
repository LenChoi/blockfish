import React from 'react';
import Slider from 'react-slick';

import SlideCardTemplate from '../cards/SlideCardTemplate';
import { ReactComponent as ArrowSvg } from '../../assets/arrow.svg';

const SlickSlider = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <ArrowSvg
        className={`${'slick-arrow slick-left-arrow-svg'}`}
        width="20"
        height="20"
        fill="#808080"
      />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <ArrowSvg
        className={`${'slick-arrow slick-right-arrow-svg'}`}
        width="20"
        height="20"
        fill="#808080"
      />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div
      style={{
        width: 800,
        height: 300,
        padding: '20px 50px',
        margin: '0 auto',
      }}
    >
      <Slider {...settings}>
        <SlideCardTemplate />
        <SlideCardTemplate />
        <SlideCardTemplate />

        <SlideCardTemplate />
        <SlideCardTemplate />
        <SlideCardTemplate />

        <SlideCardTemplate />
        <SlideCardTemplate />
        <SlideCardTemplate />
      </Slider>
    </div>
  );
};

export default SlickSlider;
