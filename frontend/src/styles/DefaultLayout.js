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
  min-height: 600px;
`;
export const MainConentContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
export const MainConentWrapper = styled.div`
  padding: 50px 20px 80px 20px;
`;

// MyPage Layout
export const MyPageListContainer = styled.div`
  max-width: 1080px;
  border-radius: 10px;
  border: 1px solid #808080;
  box-shadow: 0px 4px 4px 2px rgb(192, 192, 192, 0.15);
  margin: 0 auto;
`;
export const MyPageListItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
`;
export const MyPageListItem = styled.li`
  color: ${(props) => (props.viewState ? '#4169e1' : '#808080')};
  transition: 0.1s linear;
  &:hover {
    opacity: 0.7;
  }
`;
export const MyPageContentContainer = styled.article`
  max-width: 1080px;
  margin: 70px auto 0 auto;
`;
