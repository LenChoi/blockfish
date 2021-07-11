import styled from '@emotion/styled';

export const MainSection = styled.section`
  margin-top: 30px;
`;
export const SelectionWrapper = styled.ul`
  display: flex;
  margin-top: 15px;
`;
export const SelectionWrapperLi = styled.li`
margin-right: 10px;
transition: 0.2s ease-in-out;
cursor: pointer;
&:hover {
  span{
    opacity: 0.7;
  }
  div {
    width: 100%;
  }
`;
export const ListSelectUnderLine = styled.div`
  height: 2px;
  width: ${(props) => (props.clicked ? '100%' : '0')};
  background-color: #00bfff;
  transition: 0.2s ease-in-out;
`;
export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;
