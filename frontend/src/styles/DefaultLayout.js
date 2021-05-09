import styled from '@emotion/styled';

export const NavContainer = styled.div`
  width: 100%;
`;
export const NavWrapper = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: ${(props) => (props.background ? props.background : 'white')};
`;
export const NavItems = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavItem = styled.li`
  margin-left: 8px;
  cursor: pointer;
`;
export const CategoryItem = styled.li`
  cursor: pointer;
  padding: 10px 15px;
  transition: 0.2s linear;
  &:hover {
    opacity: 0.5;
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
export const FooterWrapper = styled.div`
  padding: 25px 15px;
`;
export const FooterItems = styled.ul`
  display: flex;
  align-items: center;
`;
export const FooterItem = styled.li`
  color: white;
  margin-right: 10px;
`;
export const FooterBottom = styled.div`
  width: 100%;
  color: white;
  padding: 30px 0 10px 0;
  text-align: center;
`;
export const MainConent = styled.section`
  width: 100%;
  min-height: 300px;
`;
