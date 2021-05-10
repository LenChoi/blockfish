import React from 'react';
// import PropTypes from 'prop-types';
import { InputAdornment, TextField } from '@material-ui/core';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import DefaultLayout from '../../layouts/DefaultLayout';
import TextDefault from '../../components/ui/TextDefault';
import { LoginContainer, LoginWrapper } from '../../styles/Login';

const Login = () => {
  const loginText = '로그인';
  return (
    <DefaultLayout>
      <LoginContainer>
        <TextDefault size="30px" weight="700">
          {loginText}
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
        </LoginWrapper>
      </LoginContainer>
    </DefaultLayout>
  );
};

Login.propTypes = {};

export default Login;
