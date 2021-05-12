import React from 'react';
import { ContentImageLayout, SlideCardLayout, SliderCardContentWrapper } from '../../styles/Card';
import TextDefault from '../ui/TextDefault';

const SlideCardTemplate = () => (
  <SlideCardLayout>
    <ContentImageLayout />
    <SliderCardContentWrapper>
      <div style={{ paddingBottom: 10 }}>
        <TextDefault size="16px" color="#000">
          KM 플레이어 64X
        </TextDefault>
      </div>

      <TextDefault size="14px" color="#808080">
        4K, 8K, UHD 등 고품질의 영상을 완벽하게 재생할 수 있는 플레이어입니다.
      </TextDefault>
    </SliderCardContentWrapper>
  </SlideCardLayout>
);

export default SlideCardTemplate;
