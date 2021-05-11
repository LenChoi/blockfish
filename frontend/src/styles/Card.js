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
