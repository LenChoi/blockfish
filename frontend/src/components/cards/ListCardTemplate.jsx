import React from 'react';
import { ListCardContainer, ListCardContentBottom, ListCardLayout } from '../../styles/Card';
import HalfRating from '../ui/HalfRating';
import TextDefault from '../ui/TextDefault';

const ListCardTemplate = ({ content }) => {
  const baseUrl = 'http://3.141.28.160';

  return (
    <ListCardLayout>
      <ListCardContainer>
        {/* Content 이미지 */}
        {/* <img alt="" width="70" height="70" src={`${baseUrl}${content.imageAddress}`} /> */}
        <img alt="" width="70" height="70" src={`${baseUrl}${'/blockfish.png'}`} />
        {/* Content - 시작 */}
        <div>
          {/* Content 타이틀 - 시작 */}
          <div>
            <TextDefault size="18px" lineHeight="25px">
              {content.name}
            </TextDefault>
          </div>
          {/* Content 타이틀 - 끝 */}

          {/* Content 설명 - 시작 */}
          <div>
            <TextDefault size="14px" lineHeight="25px" color="#808080">
              {content.info}
            </TextDefault>
          </div>
          {/* Content 설명 - 끝 */}

          {/* Content Bottom - 시작 */}
          <ListCardContentBottom>
            <HalfRating value={content.starRank} />
            <div style={{ marginLeft: 5 }}>
              <TextDefault size="14px" color="#808080">
                ( {content.downCount} )
              </TextDefault>
            </div>
          </ListCardContentBottom>
          {/* Content Bottom - 끝 */}
        </div>
        {/* Content - 끝 */}
        <TextDefault size="14px" color="#00bfff">
          Free
        </TextDefault>
      </ListCardContainer>
    </ListCardLayout>
  );
};

export default ListCardTemplate;
