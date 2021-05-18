import React from 'react';
import TextDefault from '../ui/TextDefault';
import { VersionContainer } from '../../styles/DownloadDetailLeft';
import VersionCard from '../cards/VersionCard';

const ContentVersion = () => (
  <div>
    <TextDefault size="20px" weight="700">
      버전
    </TextDefault>
    <div style={{ marginTop: 15, borderBottom: '3px solid #222222', paddingBottom: 20 }}>
      <TextDefault size="14px" color="gray">
        프로그램의 버전을 보여줍니다. 원하시는 버전을 선택하세요.
      </TextDefault>
    </div>

    <VersionContainer>
      <VersionCard />
      <VersionCard />
      <VersionCard />
      <VersionCard />
      <VersionCard />
      <VersionCard />
      <VersionCard />
      <VersionCard />
      <VersionCard />
    </VersionContainer>
  </div>
);

export default ContentVersion;
