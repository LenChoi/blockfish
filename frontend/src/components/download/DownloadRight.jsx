import React, { useEffect, useState } from 'react';
import { RightLayout, SliderContainer } from '../../styles/Download';
import { isEmpty } from '../../utils/utils';
import ListCardTemplate from '../cards/ListCardTemplate';
import SlideCardTemplate from '../cards/SlideCardTemplate';
import TextDefault from '../ui/TextDefault';

const DownloadRight = () => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setFileList([
      {
        id: 1,
        title: 'Zoom Cloud Meetings',
        descption: '수많은 기능을 이용해 영상 통화와 미팅을 해보세요',
        rating: 4.5,
        commentNum: 40,
        imgSrc: '/images/card/empty.png',
      },
      {
        id: 2,
        title: 'Zoom Cloud Meetings',
        descption: '메롱',
        rating: 3.5,
        commentNum: 30,
        imgSrc: '/images/card/empty.png',
      },
    ]);
  }, []);

  return (
    <RightLayout>
      <TextDefault size="20px" weight="700">
        추천
      </TextDefault>
      <SliderContainer>
        <SlideCardTemplate />
        <SlideCardTemplate />
        <SlideCardTemplate />
      </SliderContainer>
      {!isEmpty(fileList) &&
        fileList.map((data) => <ListCardTemplate key={data.id} content={data} />)}
    </RightLayout>
  );
};

export default DownloadRight;
