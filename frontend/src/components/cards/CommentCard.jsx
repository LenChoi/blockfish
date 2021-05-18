import { Rating } from '@material-ui/lab';
import React from 'react';
import { useStyles } from '../../styles/materialsStyle';
import { CommentCardContainer, CommentLeftWrapper, CommentRightWrapper } from '../../styles/Card';
import TextDefault from '../ui/TextDefault';

const CommentCard = () => {
  const classes = useStyles();
  console.log('hi');

  return (
    <CommentCardContainer>
      <CommentLeftWrapper>
        <Rating
          className={classes.commRating}
          name="half-rating"
          defaultValue={3.5}
          precision={0.5}
          readOnly
        />
        <TextDefault size="14px" color="#808080">
          abcdefg001
        </TextDefault>

        <TextDefault size="14px" color="#808080">
          2021.05.18
        </TextDefault>
      </CommentLeftWrapper>

      <CommentRightWrapper>
        <TextDefault size="14px" color="#808080">
          좋아요!! 추천합니다 ㅎㅎ
        </TextDefault>
      </CommentRightWrapper>
    </CommentCardContainer>
  );
};

export default CommentCard;
