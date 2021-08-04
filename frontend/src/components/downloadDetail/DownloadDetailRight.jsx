import { Button } from '@material-ui/core';
import React from 'react';
import {
  DnldDetailContentWrapper,
  DnldDetailItem,
  DnldDetailItemLeft,
  RelativeItemContainer,
} from '../../styles/DownloadDetail';
import { useStyles } from '../../styles/materialsStyle';
import TextDefault from '../ui/TextDefault';

const DownloadDetailRight = () => {
  const classes = useStyles();

  return (
    <div>
      <Button className={`${classes.downloadBtn}`}>무료 다운로드</Button>
      <DnldDetailContentWrapper>
        <ul>
          <DnldDetailItem>
            <DnldDetailItemLeft>
              <TextDefault size="18px" color="#505050">
                OS
              </TextDefault>
            </DnldDetailItemLeft>
            <TextDefault size="18px" color="#505050">
              Windows
            </TextDefault>
          </DnldDetailItem>

          {/* <DnldDetailItem style={{ marginTop: 25 }}>
            <DnldDetailItemLeft>
              <TextDefault size="18px" color="#505050">
                버전
              </TextDefault>
            </DnldDetailItemLeft>
            <TextDefault size="18px" color="#505050">
              v3.4.9
            </TextDefault>
          </DnldDetailItem> */}

          {/* <DnldDetailItem style={{ marginTop: 25 }}>
            <DnldDetailItemLeft>
              <TextDefault size="18px" color="#505050">
                크기
              </TextDefault>
            </DnldDetailItemLeft>
            <TextDefault size="18px" color="#505050">
              89 M
            </TextDefault>
          </DnldDetailItem> */}

          {/* <DnldDetailItem style={{ marginTop: 25 }}>
            <DnldDetailItemLeft>
              <TextDefault size="18px" color="#505050">
                언어
              </TextDefault>
            </DnldDetailItemLeft>
            <TextDefault size="18px" color="#505050">
              한글/영어
            </TextDefault>
          </DnldDetailItem> */}

          <DnldDetailItem style={{ marginTop: 25 }}>
            <DnldDetailItemLeft>
              <TextDefault size="18px" color="#505050">
                사용범위
              </TextDefault>
            </DnldDetailItemLeft>
            <TextDefault size="18px" color="#505050">
              Free
            </TextDefault>
          </DnldDetailItem>

          <DnldDetailItem style={{ marginTop: 25 }}>
            <DnldDetailItemLeft>
              <TextDefault size="18px" color="#505050">
                업데이트
              </TextDefault>
            </DnldDetailItemLeft>
            <TextDefault size="18px" color="#505050">
              2016.09.20
            </TextDefault>
          </DnldDetailItem>

          <DnldDetailItem style={{ marginTop: 25 }}>
            <DnldDetailItemLeft>
              <TextDefault size="18px" color="#505050">
                다운로드 수
              </TextDefault>
            </DnldDetailItemLeft>
            <TextDefault size="18px" color="#505050">
              2,240,273
            </TextDefault>
          </DnldDetailItem>

          <DnldDetailItem style={{ marginTop: 25 }}>
            <TextDefault size="18px" color="#505050">
              By BitTorrent
            </TextDefault>
          </DnldDetailItem>
        </ul>
      </DnldDetailContentWrapper>
      <DnldDetailContentWrapper>
        <div>
          <TextDefault size="18px" color="#505050" weight="700">
            관련 프로그램
          </TextDefault>
        </div>
        <ul style={{ marginTop: 20 }}>
          <RelativeItemContainer>
            <img alt="" src="/images/card/empty.png" height="50" />
            <span style={{ marginLeft: 13 }}>
              <TextDefault size="18px" color="#505050">
                네이버백신
              </TextDefault>
            </span>
            <TextDefault size="16px" color="#00bfff">
              Free
            </TextDefault>
          </RelativeItemContainer>
          <RelativeItemContainer>
            <img alt="" src="/images/card/empty.png" height="50" />
            <span style={{ marginLeft: 13 }}>
              <TextDefault size="18px" color="#505050">
                네이버백신
              </TextDefault>
            </span>
            <TextDefault size="16px" color="#00bfff">
              Free
            </TextDefault>
          </RelativeItemContainer>
          <RelativeItemContainer>
            <img alt="" src="/images/card/empty.png" height="50" />
            <span style={{ marginLeft: 13 }}>
              <TextDefault size="18px" color="#505050">
                네이버백신
              </TextDefault>
            </span>
            <TextDefault size="16px" color="#00bfff">
              Free
            </TextDefault>
          </RelativeItemContainer>
        </ul>
      </DnldDetailContentWrapper>
    </div>
  );
};

export default DownloadDetailRight;
