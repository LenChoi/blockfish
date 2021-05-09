import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoryItem,
  NavContainer,
  NavItem,
  NavItems,
  NavWrapper,
} from '../../styles/DefaultLayout';
import TextDefault from '../ui/TextDefault';

const Nav = () => (
  <nav>
    <NavContainer>
      <NavWrapper>
        <div>
          <Link to="/upload">
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
            <Link to="/login">
              <TextDefault size="15px" color="#000">
                로그인
              </TextDefault>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/join">
              <TextDefault size="15px" color="#000">
                회원가입
              </TextDefault>
            </Link>
          </NavItem>
        </NavItems>
      </NavWrapper>
    </NavContainer>

    <NavContainer>
      <NavWrapper background="#000">
        <NavItems>
          <CategoryItem>
            <Link to="/download">
              <TextDefault size="15px" color="#fff">
                카테고리
              </TextDefault>
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/download/windows">
              <TextDefault size="15px" color="#fff">
                Windows
              </TextDefault>
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/download/mac">
              <TextDefault size="15px" color="#fff">
                Mac
              </TextDefault>
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/download/android">
              <TextDefault size="15px" color="#fff">
                Android
              </TextDefault>
            </Link>
          </CategoryItem>
          <CategoryItem>
            <Link to="/download/ios">
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

export default Nav;
