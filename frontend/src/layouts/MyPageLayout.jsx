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
import { ReactComponent as UserCircleSvg } from '../assets/user-circle-solid.svg';
import { ReactComponent as EditSvg } from '../assets/edit-solid.svg';
import { ReactComponent as AddressCardSvg } from '../assets/address-card-regular.svg';
import { ReactComponent as UploadSvg } from '../assets/cloud-upload-alt-solid.svg';
import { ReactComponent as DownloadSvg } from '../assets/cloud-download-alt-solid.svg';
import { ReactComponent as FileUploadSvg } from '../assets/file-upload-solid.svg';

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
              <div style={{ marginBottom: 10 }}>
                <UserCircleSvg width="50" height="50" fill={listState[0] ? '#4169e1' : '#808080'} />
              </div>
              <TextDefault size="16px">개인정보</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[1]}>
            <Link to="/my-page/review">
              <div style={{ marginBottom: 10 }}>
                <EditSvg width="50" height="50" fill={listState[1] ? '#4169e1' : '#808080'} />
              </div>
              <TextDefault size="16px">리뷰</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[2]}>
            <Link to="/my-page/withdrawal">
              <div style={{ marginBottom: 10 }}>
                <AddressCardSvg
                  width="50"
                  height="50"
                  fill={listState[2] ? '#4169e1' : '#808080'}
                />
              </div>
              <TextDefault size="16px">회원탈퇴</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[3]}>
            <Link to="/my-page/history/download">
              <div style={{ marginBottom: 10 }}>
                <DownloadSvg width="50" height="50" fill={listState[3] ? '#4169e1' : '#808080'} />
              </div>
              <TextDefault size="16px">다운로드 내역</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[4]}>
            <Link to="/my-page/history/upload">
              <div style={{ marginBottom: 10 }}>
                <UploadSvg width="50" height="50" fill={listState[4] ? '#4169e1' : '#808080'} />
              </div>
              <TextDefault size="16px">업로드 내역</TextDefault>
            </Link>
          </MyPageListItem>
          <MyPageListItem viewState={listState[5]}>
            <Link to="/my-page/upload">
              <div style={{ marginBottom: 10 }}>
                <FileUploadSvg width="50" height="50" fill={listState[5] ? '#4169e1' : '#808080'} />
              </div>
              <TextDefault size="16px">업로드</TextDefault>
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
