import styled from '@emotion/styled';

export const ListCardLayout = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 20px 0px;
  background-color: #f5f5f5;
  border-radius: 3px;
  box-shadow: 2px 2px 4px 1px rgba(40, 40, 40, 0.3);
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
