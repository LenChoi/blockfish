import styled from '@emotion/styled';

export const BreadScrumbWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const DnldDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-column-gap: 35px;
  margin-top: 30px;
`;
export const DnldDetailContentWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 25px;
  margin-top: 30px;
`;
export const DnldDetailItemContainer = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 25px;
`;
export const DnldDetailItem = styled.li`
  display: flex;
  align-items: center;
`;
export const DnldDetailItemLeft = styled.div`
  min-width: 120px;
`;
export const RelativeItemContainer = styled.li`
  display: grid;
  width: 100%;
  height: 60px;
  grid-template-columns: 60px auto 40px;
  justify-content: spacebetween;
  align-items: center;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #a9a9a9;
`;
