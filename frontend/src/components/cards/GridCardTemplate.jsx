import React from 'react';
import { GridCardContainer, GridCardWrapper, CardRatingBarWrapper } from '../../styles/Card';
import TextDefault from '../ui/TextDefault';
import HalfRating from '../ui/HalfRating';
import { useHistory } from 'react-router';

const GridCardTemplate = (props) => {
  const { content } = props;
  const history = useHistory();

  const onClickCard = (id) => {
    history.push(`/blockfish/download/detail/${id}`);
  };

  return (
    <GridCardContainer onClick={() => onClickCard(content.id)}>
      <GridCardWrapper>
        <div style={{ textAlign: 'center' }}>
          <img alt="" width="80" height="80" src={content.imgSrc} />
        </div>
        <div style={{ textAlign: 'center', marginTop: 13 }}>
          <TextDefault size="16px" weight="700">
            {content.title}
          </TextDefault>
        </div>
        <div style={{ marginTop: 13 }}>
          <TextDefault size="14px" lineHeight="14px" color="#808080">
            {content.descption}
          </TextDefault>
        </div>

        <CardRatingBarWrapper>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <HalfRating value={content.rating} />
            <div style={{ marginLeft: 5 }}>
              <TextDefault size="14px" color="#808080">
                (
              </TextDefault>
              <TextDefault size="14px" color="#808080">
                {content.commentNum}
              </TextDefault>
              <TextDefault size="14px" color="#808080">
                )
              </TextDefault>
            </div>
          </div>
          <div>
            <TextDefault size="14px" color="#00bfff">
              Free
            </TextDefault>
          </div>
        </CardRatingBarWrapper>
      </GridCardWrapper>
    </GridCardContainer>
  );
};

export default GridCardTemplate;
