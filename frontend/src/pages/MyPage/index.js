import React from 'react';
import TextDefault from '../../components/ui/TextDefault';
import DefaultLayout from '../../layouts/DefaultLayout';
import { MyPageCardContainer, MyPageCardWrapper, MyPageContainer } from '../../styles/MyPage';

const MyPage = () => {
  console.log('hello');
  return (
    <DefaultLayout>
      <div>
        <TextDefault size="30px" weight="700">
          MyPage
        </TextDefault>
      </div>

      <MyPageContainer>
        <MyPageCardContainer>
          <MyPageCardWrapper>
            <TextDefault size="16px" color="#2f4f4f" weight="700">
              개인정보
            </TextDefault>
          </MyPageCardWrapper>
        </MyPageCardContainer>

        <MyPageCardContainer>
          <MyPageCardWrapper>
            <TextDefault size="16px" color="#2f4f4f" weight="700">
              리뷰
            </TextDefault>
          </MyPageCardWrapper>
        </MyPageCardContainer>

        <MyPageCardContainer>
          <MyPageCardWrapper>
            <TextDefault size="16px" color="#2f4f4f" weight="700">
              회원탈퇴
            </TextDefault>
          </MyPageCardWrapper>
        </MyPageCardContainer>

        <MyPageCardContainer>
          <MyPageCardWrapper>
            <TextDefault size="16px" color="#2f4f4f" weight="700">
              다운로드 내역
            </TextDefault>
          </MyPageCardWrapper>
        </MyPageCardContainer>

        <MyPageCardContainer>
          <MyPageCardWrapper>
            <TextDefault size="16px" color="#2f4f4f" weight="700">
              업로드 내역
            </TextDefault>
          </MyPageCardWrapper>
        </MyPageCardContainer>

        <MyPageCardContainer>
          <MyPageCardWrapper>
            <TextDefault size="16px" color="#2f4f4f" weight="700">
              업로드
            </TextDefault>
          </MyPageCardWrapper>
        </MyPageCardContainer>
      </MyPageContainer>
    </DefaultLayout>
  );
};

export default MyPage;
