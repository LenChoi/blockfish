import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {
  CategoryItem,
  NavContainer,
  NavItem,
  NavItems,
  NavWrapper,
} from '../../styles/DefaultLayout';
import TextDefault from '../ui/TextDefault';

const Nav = () => {
  const [login, setLogin] = useState(false);

  const onClickLogin = () => {
    setLogin(!login);
  };

  return (
    <nav>
      <NavContainer>
        <NavWrapper>
          <div>
            <Link to="/blockfish">
              <TextDefault size="30px" color="#000" weight="700">
                Logo
              </TextDefault>
            </Link>
          </div>
          <NavItems>
            <NavItem>
              <Link to="/upload">
                <TextDefault size="15px" color="#000">
                  업로드
                </TextDefault>
              </Link>
            </NavItem>
            <NavItem>
              {!login ? (
                // <Link to="/login">
                <Button onClick={onClickLogin}>로그인</Button>
              ) : (
                // </Link>
                <Link to="/login">
                  <TextDefault size="15px" color="#000">
                    로그아웃
                  </TextDefault>
                </Link>
              )}
            </NavItem>
            <NavItem>
              {!login ? (
                <Link to="/join">
                  <TextDefault size="15px" color="#000">
                    회원가입
                  </TextDefault>
                </Link>
              ) : (
                <Link to="/my-page">
                  <TextDefault size="15px" color="#000">
                    마이페이지
                  </TextDefault>
                </Link>
              )}
            </NavItem>
          </NavItems>
        </NavWrapper>
      </NavContainer>

      <NavContainer>
        <NavWrapper background="#000">
          <NavItems>
            <CategoryItem>
              <Link to="/blockfish/download">
                <TextDefault size="15px" color="#fff">
                  카테고리
                </TextDefault>
              </Link>
            </CategoryItem>
            <CategoryItem>
              <Link to="/blockfish/download/windows">
                <TextDefault size="15px" color="#fff">
                  Windows
                </TextDefault>
              </Link>
            </CategoryItem>
            <CategoryItem>
              <Link to="/blockfish/download/mac">
                <TextDefault size="15px" color="#fff">
                  Mac
                </TextDefault>
              </Link>
            </CategoryItem>
            <CategoryItem>
              <Link to="/blockfish/download/android">
                <TextDefault size="15px" color="#fff">
                  Android
                </TextDefault>
              </Link>
            </CategoryItem>
            <CategoryItem>
              <Link to="/blockfish/download/ios">
                <TextDefault size="15px" color="#fff">
                  iOS
                </TextDefault>
              </Link>
            </CategoryItem>
          </NavItems>
          <div style={{ color: 'white' }}>Search</div>
        </NavWrapper>
      </NavContainer>
    </nav>
  );
};

export default Nav;
