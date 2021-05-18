import React from 'react';
import { VersionCardContainer } from '../../styles/Card';
import TextDefault from '../ui/TextDefault';

const VersionCard = (props) => {
  console.log(props);
  return (
    <VersionCardContainer>
      <div>
        <TextDefault size="14px" weight="700" color="#808080">
          uTorrent
        </TextDefault>
        <div style={{ marginTop: 10 }}>
          <TextDefault size="14px" weight="700" color="#000">
            v3.4.9
          </TextDefault>
        </div>
      </div>

      <div>
        <TextDefault size="14px" weight="700" color="#808080">
          업데이트
        </TextDefault>
        <div style={{ marginTop: 10 }}>
          <TextDefault size="14px" weight="700" color="#000">
            2021.05.18
          </TextDefault>
        </div>
      </div>
    </VersionCardContainer>
  );
};

export default VersionCard;
