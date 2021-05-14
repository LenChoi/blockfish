import React, { useEffect, useState } from 'react';
import { isEmpty } from '../../utils/utils';
import ListCardTemplate from '../cards/ListCardTemplate';
import TextDefault from '../ui/TextDefault';
import SortingBarMain from './SortingBarMain';

const DownloadMain = () => {
  const [fileList, setFileList] = useState([]);
  const [viewState, setViewState] = useState(false);

  const onToggleView = (s) => {
    if (s) {
      setViewState(true);
    } else {
      setViewState(false);
    }
  };

  useEffect(() => {
    setViewState(false);
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
      {
        id: 3,
        title: 'Zoom Cloud Meetings',
        descption: '메롱',
        rating: 3.5,
        commentNum: 30,
        imgSrc: '/images/card/empty.png',
      },
    ]);
  }, []);

  console.log('viewState', viewState);

  return (
    <>
      <div style={{ marginLeft: '50px' }}>
        <TextDefault size="20px" weight="700">
          최신
        </TextDefault>

        <SortingBarMain onToggleView={onToggleView} />

        {!isEmpty(fileList) &&
          (!viewState ? (
            fileList.map((data) => <ListCardTemplate key={data.id} content={data} />)
          ) : (
            <div>Hello</div>
          ))}
      </div>
      <div style={{ marginLeft: '50px' }}>
        <TextDefault size="20px" weight="700">
          인기
        </TextDefault>
        <SortingBarMain onToggleView={onToggleView} />
        {!isEmpty(fileList) &&
          (!viewState ? (
            fileList.map((data) => <ListCardTemplate key={data.id} content={data} />)
          ) : (
            <div>Hello</div>
          ))}
      </div>
    </>
  );
};

export default DownloadMain;
