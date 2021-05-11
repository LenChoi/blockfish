import { FormControlLabel, FormGroup } from '@material-ui/core';
import React, { useState } from 'react';
import { CheckboxItem, CheckboxItems, LeftLayout, RefreshButton } from '../../styles/Download';
import CheckboxDefault from '../ui/CheckboxDefault';
import TextDefault from '../ui/TextDefault';

const DownloadLeft = () => {
  const [checked, setChecked] = useState({
    windows: false,
    mac: false,
    android: false,
    ios: false,
    free: false,
    charged: false,
    categoryA: false,
    categoryB: false,
  });

  const onChangeChecked = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
  };

  const onClickRefresh = () => {
    const newCheckedObj = checked;
    const checkedArr = Object.keys(newCheckedObj);
    checkedArr.forEach((key) => {
      newCheckedObj[key] = false;
    });

    setChecked({ ...newCheckedObj });
  };

  return (
    <LeftLayout>
      <div style={{ textAlign: 'end' }}>
        <RefreshButton
          startIcon={<img src="/images/download/refresh_black.png" alt="" width="20" />}
          onClick={onClickRefresh}
        >
          전체해제
        </RefreshButton>
      </div>

      <div>
        <TextDefault size="20px" weight="700">
          OS
        </TextDefault>
      </div>
      <CheckboxItems>
        <CheckboxItem>
          <FormGroup row>
            <FormControlLabel
              control={
                <CheckboxDefault
                  name="windows"
                  checked={checked.windows}
                  onChange={onChangeChecked}
                />
              }
              label="Windows"
            />
          </FormGroup>
        </CheckboxItem>
        <CheckboxItem>
          <FormGroup row>
            <FormControlLabel
              control={
                <CheckboxDefault name="mac" checked={checked.mac} onChange={onChangeChecked} />
              }
              label="Mac"
            />
          </FormGroup>
        </CheckboxItem>
        <CheckboxItem>
          <FormGroup row>
            <FormControlLabel
              control={
                <CheckboxDefault
                  name="android"
                  checked={checked.android}
                  onChange={onChangeChecked}
                />
              }
              label="Android"
            />
          </FormGroup>
        </CheckboxItem>
        <CheckboxItem>
          <FormGroup row>
            <FormControlLabel
              control={
                <CheckboxDefault name="ios" checked={checked.ios} onChange={onChangeChecked} />
              }
              label="iOS"
            />
          </FormGroup>
        </CheckboxItem>
      </CheckboxItems>

      {/* 가격 체크박스 리스트 - 시작 */}
      <div style={{ marginTop: 20 }}>
        <TextDefault size="20px" weight="700">
          가격
        </TextDefault>
      </div>
      <CheckboxItems>
        <CheckboxItem>
          <FormGroup row>
            <FormControlLabel
              control={
                <CheckboxDefault name="free" checked={checked.free} onChange={onChangeChecked} />
              }
              label="무료"
            />
          </FormGroup>
        </CheckboxItem>
        <CheckboxItem>
          <FormGroup row>
            <FormControlLabel
              control={
                <CheckboxDefault
                  name="charged"
                  checked={checked.charged}
                  onChange={onChangeChecked}
                />
              }
              label="유료"
            />
          </FormGroup>
        </CheckboxItem>
      </CheckboxItems>
      {/* 가격 체크박스 리스트 - 끝 */}

      {/* 카테고리 체크박스 리스트 - 시작 */}
      <div style={{ marginTop: 20 }}>
        <TextDefault size="20px" weight="700">
          카테고리
        </TextDefault>
      </div>
      <CheckboxItems>
        <CheckboxItem>
          <FormGroup row>
            <FormControlLabel
              control={
                <CheckboxDefault
                  name="categoryA"
                  checked={checked.categoryA}
                  onChange={onChangeChecked}
                />
              }
              label="카테고리A"
            />
          </FormGroup>
        </CheckboxItem>
        <CheckboxItem>
          <FormGroup row>
            <FormControlLabel
              control={
                <CheckboxDefault
                  name="categoryB"
                  checked={checked.categoryB}
                  onChange={onChangeChecked}
                />
              }
              label="카테고리B"
            />
          </FormGroup>
        </CheckboxItem>
      </CheckboxItems>
      {/* 카테고리 체크박스 리스트 - 끝 */}
    </LeftLayout>
  );
};

export default DownloadLeft;
