import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import {
  Checkbox,
  InputAdornment,
  TextField,
  FormControlLabel,
  FormGroup,
} from '@material-ui/core';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import DefaultLayout from '../../layouts/DefaultLayout';
import TextDefault from '../../components/ui/TextDefault';
import { LoginContainer, LoginWrapper } from '../../styles/Login';

/**
 * @function Login
 * @author Seorim
 * @description 로그인 화면
 */
const Login = () => {
  const [userId, setUserId] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['rememberUserId']);

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setUserId(cookies.rememberUserId);
    }
  }, [cookies.rememberUserId]);
  const handleUserId = (e) => {
    console.log(e.target.value);
    if (e.target.value) {
      setUserId(e.target.value);
    }
  };
  const handleOnChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCookie('rememberUserId', userId, { maxAge: 2000 });
    } else {
      removeCookie('rememberUserId');
    }
  };

  return (
    <DefaultLayout>
      <LoginContainer>
        <TextDefault size="30px" weight="700">
          로그인
        </TextDefault>
        <LoginWrapper>
          <TextField
            label="아이디(이메일)"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityOutlinedIcon />
                </InputAdornment>
              ),
            }}
            style={{ marginTop: '10px' }}
            onChange={handleUserId}
            value={`${userId}`}
          />
          <TextField
            label="비밀번호"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
            style={{ marginTop: '10px' }}
          />
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={`${userId} ? true : false`} />}
              label="아이디 저장"
              onChange={handleOnChange}
            />
            <span style={{ alignSelf: 'center' }}>
              <Link href="/#">아이디 찾기</Link> | <Link href="/#">비밀번호 찾기</Link>
            </span>
          </FormGroup>
          <Button variant="contained" color="primary" style={{ marginBottom: '10px' }}>
            로그인
          </Button>
          <Button variant="outlined" color="primary">
            회원가입
          </Button>
        </LoginWrapper>
      </LoginContainer>
    </DefaultLayout>
  );
};

export default Login;
