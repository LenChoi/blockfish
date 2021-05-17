import React, { useEffect, useState } from 'react';
import {
  DetailContentWrapper,
  DetailDescBarItem,
  DetailDescBarItems,
  DetailTitleWrapper,
} from '../../styles/DownloadDetailLeft';
import HalfRating from '../ui/HalfRating';
import TextDefault from '../ui/TextDefault';
import ContentDesc from './ContentDesc';
import ContentReview from './ContentReview';
import ContentVersion from './ContentVersion';

const DownloadDetailLeft = () => {
  const [viewState, setViewState] = useState([true, false, false]);

  useEffect(() => {
    console.log(viewState);
    setViewState([false, false, false]);
  }, []);

  const onClickDescBar = (id) => {
    setViewState(
      viewState.map((data, index) => {
        if (id === index) {
          return true;
        }
        return false;
      }),
    );
  };

  // 하단컴포넌트 생성 함수
  const makeContent = () => {
    let id;
    viewState.forEach((data, index) => {
      if (data) {
        id = index;
      }
    });

    switch (id) {
      case 0:
        return <ContentDesc />;
      case 1:
        return <ContentReview />;
      case 2:
        return <ContentVersion />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      {/* 타이틀 Wrapper - 시작 */}
      <DetailTitleWrapper>
        <img alt="" src="/images/card/empty.png" width="70" />
        <div>
          <TextDefault size="26px" weight="bold" color="#808080">
            uTorrent
          </TextDefault>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
            <HalfRating value={3.5} />
            <div style={{ marginLeft: 5 }}>
              <TextDefault size="14px" color="#808080">
                (
              </TextDefault>
              <TextDefault size="14px" color="#808080">
                45
              </TextDefault>
              <TextDefault size="14px" color="#808080">
                )
              </TextDefault>
            </div>
          </div>
        </div>
        <TextDefault size="18px" weight="700" color="#00bfff">
          Free
        </TextDefault>
      </DetailTitleWrapper>
      {/* 타이틀 Wrapper - 끝 */}

      {/* 컨텐츠 Wrapper - 시작 */}
      <DetailContentWrapper>
        <TextDefault size="18px" color="#222222">
          P2P파일 공유, 멀티 다운로드가 가능하며, 작은 시스템 점유율과 파일 앱, 다운시 빠른 재설정
          등을 활용할 수 있는 프로그램입니다.
        </TextDefault>
      </DetailContentWrapper>
      {/* 컨텐츠 Wrapper - 끝 */}

      {/* 컨텐츠 하단 설명 bar - 시작 */}
      <DetailDescBarItems>
        <DetailDescBarItem onClick={() => onClickDescBar(0)} bottomLine={viewState[0]}>
          <TextDefault size="18px" color="#222222">
            상세설명
          </TextDefault>
        </DetailDescBarItem>
        <DetailDescBarItem onClick={() => onClickDescBar(1)} bottomLine={viewState[1]}>
          <TextDefault size="18px" color="#222222">
            리뷰
          </TextDefault>
        </DetailDescBarItem>
        <DetailDescBarItem onClick={() => onClickDescBar(2)} bottomLine={viewState[2]}>
          <TextDefault size="18px" color="#222222">
            버전
          </TextDefault>
        </DetailDescBarItem>
      </DetailDescBarItems>
      {/* 컨텐츠 하단 설명 bar - 끝 */}

      {/* 컨텐츠 하단 설명 - 시작 */}
      {makeContent()}
      {/* 컨텐츠 하단 설명 - 끝 */}
    </div>
  );
};

export default DownloadDetailLeft;
