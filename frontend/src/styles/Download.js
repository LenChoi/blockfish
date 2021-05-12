import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

export const DownloadContainer = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-column-gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 100px 20px;
`;
export const LeftLayout = styled.div`
  max-width: 250px;
  border: 1px solid #303030;
  padding: 25px 25px;
  border-radius: 8px;
  box-shadow: 2px 3px 5px rgb(63 63 63 / 30%);
`;
export const RightLayout = styled.div`
  width: 100%;
`;
export const CheckboxItems = styled.ul`
  margin-top: 15px;
`;
export const CheckboxItem = styled.li`
  display: flex;
`;
export const RefreshButton = styled(Button)({
  background: 'none',
  border: 0,
  borderRadius: 3,
  color: '#000 !important',
  width: '100px',
  '.MuiButton-label': {
    justifyContent: 'space-between',
  },
});
export const SortItems = styled.ul`
  display: flex;z
  margin: 10px 0;
`;
export const SortItemWrapper = styled.span`
  cursor: pointer;
  transition: 0.1s linear;
  padding-bottom: 2px;
  &:hover {
    opacity: 0.5;
    border-bottom: 1px solid #808080;
  }
`;
export const ButtonWrapper = styled.span`
  cursor: pointer;
  margin-left: 7px;
  transition: 0.1s linear;
  &:hover {
    opacity: 0.5;
  }
`;
export const MenuBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SortItem = styled.ul`
  padding: 0 5px;
`;

export const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
`;
