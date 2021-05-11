import React from 'react';
import { useHistory } from 'react-router';
import { FormControlLabel, FormGroup } from '@material-ui/core';

import DefaultLayout from '../../layouts/DefaultLayout';
import TextDefault from '../../components/ui/TextDefault';
import {
  JoinButton,
  JoinCheckboxWrapper,
  JoinContainer,
  JoinContentWrapper,
} from '../../styles/Join';
import useChecked from '../../hooks/useChecked';
import Checkbox from '../../components/ui/CheckboxDefault';

/**
 * @function Join
 * @author MinByeongChan
 * @description 회원가입 선택 화면
 */
const Join = () => {
  const history = useHistory();
  const [checked, onChangeChecked] = useChecked(false);

  const onClickJoin = (url) => {
    if (!checked) {
      alert('약관에 동의해주세요.');
      return;
    }

    history.push(`/join/${url}`);
  };

  return (
    <DefaultLayout>
      <JoinContainer>
        <TextDefault size="30px" weight="700">
          회원가입
        </TextDefault>

        <JoinCheckboxWrapper>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={checked} onChangeChecked={onChangeChecked} />}
              label="14세 이상 내국인/국내거주외국인 입니다."
            />
          </FormGroup>
        </JoinCheckboxWrapper>

        <JoinContentWrapper>
          <JoinButton
            startIcon={<img src="/images/join/email_white.png" alt="" width="30" />}
            onClick={() => onClickJoin('email')}
          >
            이메일 회원가입
          </JoinButton>
        </JoinContentWrapper>
      </JoinContainer>
    </DefaultLayout>
  );
};

export default Join;
