import React, { useState } from 'react';
import { grey } from '@material-ui/core/colors';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

import DefaultLayout from '../../layouts/DefaultLayout';
import TextDefault from '../../components/ui/TextDefault';
import { JoinCheckboxWrapper, JoinContainer, JoinContentWrapper } from '../../styles/Join';

const Join = () => {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = () => {
    setChecked(!checked);
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
              control={
                <Checkbox
                  checked={checked}
                  onChange={onCheckedChange}
                  name="checkedA"
                  color={grey[900]}
                />
              }
              label="14세 이상 내국인/국내거주외국인 입니다."
            />
          </FormGroup>
        </JoinCheckboxWrapper>

        <JoinContentWrapper>
          <Button
            variant="contained"
            color="secondary"
            startIcon={
              <img
                src="/images/join/Envelope.svg"
                alt=""
                width="30"
                height="30"
                style={{ color: 'black' }}
              />
            }
            style={{ width: '100%' }}
          >
            Hello
          </Button>
        </JoinContentWrapper>
      </JoinContainer>
    </DefaultLayout>
  );
};

export default Join;
