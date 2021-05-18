import React, { useState } from 'react';
import HalfRating from '../ui/HalfRating';
import TextDefault from '../ui/TextDefault';
import { ReviewContainer, ReviewPreviewWrapper } from '../../styles/DownloadDetailLeft';
import CommentCard from '../cards/CommentCard';
import PagingContainer from '../pagination/PagingContainer';

/**
 * @function ContentReview
 * @author Byeong Chan
 */
const ContentReview = () => {
  const [page, setPage] = useState(1);
  const handleChangePage = (e, value) => {
    setPage(value);
  };

  return (
    <div>
      <TextDefault size="20px" weight="700">
        리뷰
      </TextDefault>
      <div style={{ marginTop: 15, borderBottom: '3px solid #222222', paddingBottom: 20 }}>
        <TextDefault size="14px" color="gray">
          프로그램 사용 리뷰입니다.
        </TextDefault>
      </div>

      <ReviewContainer>
        <ReviewPreviewWrapper>
          <div>
            <TextDefault size="30px">3.8</TextDefault>
            <span style={{ margin: '0 10px' }}>
              <TextDefault size="20px">/</TextDefault>
            </span>
            <TextDefault size="30px" weight="700" color="#808080">
              5
            </TextDefault>
          </div>
          <div style={{ marginTop: 15 }}>
            <HalfRating value={3.8} />
          </div>
          <div style={{ marginTop: 15 }}>
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
        </ReviewPreviewWrapper>
      </ReviewContainer>

      {/* 댓글 카드 리스트 - 시작 */}
      <CommentCard />
      <CommentCard />
      <CommentCard />
      {/* 댓글 카드 리스트 - 끝 */}

      <PagingContainer whlPage={5} page={page} handleChangePage={handleChangePage} />
    </div>
  );
};

export default ContentReview;
