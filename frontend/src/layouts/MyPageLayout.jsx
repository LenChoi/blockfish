import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  MyPageContentContainer,
  MyPageListContainer,
  MyPageListItem,
  MyPageListItems,
} from '../styles/DefaultLayout';
import TextDefault from '../components/ui/TextDefault';

const MyPageLayout = (props) => {
  const { title, viewState, children } = props;
  const [listState, setListState] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    const list = listState.map((data, index) => {
      if (index === viewState) return true;
      return false;
    });
    setListState(list);
  }, []);

  return (
    <>
      <MyPageListContainer>
        <MyPageListItems>
          <MyPageListItem viewState={listState[0]}>
            <Link to="/my-page/userinfo">
              <TextDefault size="18px">개인정보</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[1]}>
            <Link to="/my-page/userinfo">
              <TextDefault size="18px">리뷰</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[2]}>
            <Link to="/my-page/userinfo">
              <TextDefault size="18px">회원탈퇴</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[3]}>
            <Link to="/my-page/download-list">
              <TextDefault size="18px">다운로드 내역</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[4]}>
            <Link to="/my-page/userinfo">
              <TextDefault size="18px">업로드 내역</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[5]}>
            <Link to="/my-page/userinfo">
              <TextDefault size="18px">업로드</TextDefault>
            </Link>
          </MyPageListItem>
        </MyPageListItems>
      </MyPageListContainer>

      {/* 마이페이지 컨텐트 - 시작 */}
      <MyPageContentContainer>
        <div style={{ marginTop: 40 }}>
          <TextDefault size="30px" weight="700">
            {title}
          </TextDefault>
        </div>
        {children}
      </MyPageContentContainer>
      {/* 마이페이지 컨텐트 - 끝 */}
    </>
  );
};

MyPageLayout.prototype = {
  title: PropTypes.string,
  viewState: PropTypes.number,
};

export default MyPageLayout;
