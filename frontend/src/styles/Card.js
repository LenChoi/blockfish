import styled from '@emotion/styled';

export const ListCardLayout = styled.div`
  width: 100%;
  max-width: 700px;
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 3px;
  box-shadow: 2px 2px 4px 1px rgba(40, 40, 40, 0.3);
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    opacity: 0.8;
    box-shadow: 5px 5px 5px 1px rgba(40, 40, 40, 0.3);
  }
`;
export const ListCardContainer = styled.div`
  display: grid;
  grid-template-columns: 90px auto 30px;
  position: relative;
  padding: 15px;
`;
export const ListCardContentBottom = styled.div`
  display: flex;
  align-items: center;
`;
export const CardRatingBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`;

export const SlideCardLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  border-radius: 5px;
  padding: 0 15px;
`;
export const ContentImageLayout = styled.div`
  height: 100%;
  max-height: 150px;
  background-color: #ececec;
  background-image: url('/images/card/empty.png');
  background-size: contain;
  background-position: 50% 100%;
  background-repeat: no-repeat;
  border-radius: 15px;
  margin-bottom: 15px;
`;
export const SliderCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;
export const ImageSliderLayout = styled.div`
  display: grid;
  position: relative;
  padding: 15px;
`;

// GridCardTemplate
export const GridCardContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 4px 1px rgba(40, 40, 40, 0.3);
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    opacity: 0.8;
    box-shadow: 5px 5px 5px 1px rgba(40, 40, 40, 0.3);
  }
`;
export const GridCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

// CommentCard (댓글 카드)
export const CommentCardContainer = styled.div`
  display: flex;
  border-bottom: 3px solid #999999;
  grid-column-gap: 20px;
  margin-top: 20px;
  padding-bottom: 20px;
`;
export const CommentLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
`;
export const CommentRightWrapper = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 12px;
`;

// VersionCard (버전 카드 레이아웃)
export const VersionCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #222;
  border-radius: 15px;
  padding: 15px;
`;

export const CheckedListCardLayout = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 3px;
  box-shadow: 2px 2px 4px 1px rgba(40, 40, 40, 0.3);
  cursor: pointer;
  transition: 0.1s linear;
  &:hover {
    opacity: 0.8;
    box-shadow: 5px 5px 5px 1px rgba(40, 40, 40, 0.3);
  }
`;
export const CheckedListCardContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 90px auto 120px;
  position: relative;
  padding: 15px;
`;
