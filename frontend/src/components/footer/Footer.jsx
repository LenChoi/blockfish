import React from 'react';
import {
  FooterBottom,
  FooterContainer,
  FooterItem,
  FooterItems,
  FooterWrapper,
} from '../../styles/DefaultLayout';
import TextDefault from '../ui/TextDefault';

const footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <div>
        <TextDefault size="30px" color="#fff" lineHeight="55px" weight="700">
          Logo
        </TextDefault>
      </div>
      <FooterItems>
        <FooterItem>
          <TextDefault size="16px" color="#fff">
            회사소개
          </TextDefault>
        </FooterItem>
        <FooterItem>
          <TextDefault size="16px" color="#fff">
            이용약관
          </TextDefault>
        </FooterItem>
        <FooterItem>
          <TextDefault size="16px" color="#fff">
            개인정보처리방침
          </TextDefault>
        </FooterItem>
        <FooterItem>
          <TextDefault size="16px" color="#fff">
            쿠키설정
          </TextDefault>
        </FooterItem>
      </FooterItems>
      <FooterItems>
        <FooterItem>
          <TextDefault size="20px" color="#fff" lineHeight="30px" weight="700">
            Youtube
          </TextDefault>
        </FooterItem>
        <FooterItem>
          <TextDefault size="20px" color="#fff" lineHeight="30px" weight="700">
            Twitter
          </TextDefault>
        </FooterItem>
        <FooterItem>
          <TextDefault size="20px" color="#fff" lineHeight="30px" weight="700">
            Facebook
          </TextDefault>
        </FooterItem>
      </FooterItems>
      <FooterBottom>© Copyright 2021 BlockFish. All rights reserved.</FooterBottom>
    </FooterWrapper>
  </FooterContainer>
);

export default footer;
