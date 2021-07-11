import React, { useEffect, useState } from 'react';
import { GridLayoutWrapper } from '../../styles/Download';
import { isEmpty } from '../../utils/utils';
import DownloadCard from '../cards/DownloadCard';
import TextDefault from '../ui/TextDefault';
import ListCardTemplate from '../cards/ListCardTemplate';
import {
  ListSelectUnderLine,
  SelectionWrapper,
  SelectionWrapperLi,
  MainSection,
  ListWrapper,
} from '../../styles/Main';

const DownloadMain = () => {
  const [fileList, setFileList] = useState([]);
  // const [viewState, setViewState] = useState(false);

  // const onToggleView = (s) => {
  //   if (s) {
  //     setViewState(true);
  //   } else {
  //     setViewState(false);
  //   }
  // };
  const [selectItems, setSelectItems] = useState([
    { id: 0, name: 'Windows', clicked: false },
    { id: 1, name: 'Mac', clicked: false },
    { id: 2, name: 'Android', clicked: false },
    { id: 3, name: 'iOS', clicked: false },
  ]);

  const onClickListSelection = (e) => {
    const name = e.target.dataset.name;
    setSelectItems(
      selectItems.map((data) => ({
        ...data,
        clicked: data.name === name ? true : false,
      })),
    );
  };

  useEffect(() => {
    setFileList([
      {
        id: 1,
        title: 'Zoom Cloud Meetings',
        descption:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        rating: 4.5,
        commentNum: 40,
        imgSrc:
          'https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp',
        category: '유틸리티',
        os: 'android',
      },
      {
        id: 2,
        title: 'Zoom Cloud Meetings',
        descption: '메롱',
        rating: 3.5,
        commentNum: 30,
        imgSrc:
          'https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp',
        category: '유틸리티',
        os: 'ios',
      },
      {
        id: 3,
        title: 'Zoom Cloud Meetings',
        descption: '메롱',
        rating: 2.5,
        commentNum: 30,
        imgSrc:
          'https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp',
        category: '유틸리티',
        os: 'mac',
      },
      {
        id: 4,
        title: 'Zoom Cloud Meetings',
        descption: '수많은 기능을 이용해 영상 통화와 미팅을 해보세요',
        rating: 4.5,
        commentNum: 40,
        imgSrc: '/images/card/empty.png',
        category: '유틸리티',
        os: 'window',
      },
      {
        id: 5,
        title: 'Zoom Cloud Meetings',
        descption: '메롱',
        rating: 3.5,
        commentNum: 30,
        imgSrc: '/images/card/empty.png',
        category: '유틸리티',
        os: 'android',
      },
      {
        id: 6,
        title: 'Zoom Cloud Meetings',
        descption: '메롱',
        rating: 2.5,
        commentNum: 30,
        imgSrc: '/images/card/empty.png',
        category: '유틸리티',
        os: 'ios',
      },
    ]);
  }, []);

  return (
    <article>
      <MainSection>
        <TextDefault size="25px" weight="700">
          최신
        </TextDefault>

        <div>
          <SelectionWrapper>
            {!isEmpty(selectItems) &&
              selectItems.map((data) => (
                <SelectionWrapperLi
                  key={data.id}
                  data-name={data.name}
                  onClick={onClickListSelection}
                >
                  <TextDefault size="16px" lineHeight="35px">
                    {data.name}
                  </TextDefault>
                  <ListSelectUnderLine clicked={data.clicked} />
                </SelectionWrapperLi>
              ))}
          </SelectionWrapper>
        </div>

        <ListWrapper>
          {!isEmpty(fileList) &&
            fileList.map((data) => <ListCardTemplate key={data.id} content={data} />)}
        </ListWrapper>
      </MainSection>

      <MainSection>
        <TextDefault size="25px" weight="700">
          인기
        </TextDefault>
        <div style={{ marginTop: 20 }}>
          {!isEmpty(fileList) && (
            <GridLayoutWrapper>
              {fileList.map((data) => (
                <DownloadCard key={data.id} content={data} />
              ))}
            </GridLayoutWrapper>
          )}
        </div>
      </MainSection>
    </article>
  );
};

export default DownloadMain;
