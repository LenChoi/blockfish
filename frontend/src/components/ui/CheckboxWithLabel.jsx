import { FormControlLabel, FormGroup } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../styles/materialsStyle';
import CheckboxDefault from './CheckboxDefault';

const CheckboxWithLabel = ({ checked, onChangeChecked, name, label }) => {
  const classes = useStyles();
  return (
    <FormGroup className={classes.chkboxGr} row>
      <FormControlLabel
        control={<CheckboxDefault name={name} checked={checked} onChange={onChangeChecked} />}
        label={label}
      />
    </FormGroup>
  );
};

export default CheckboxWithLabel;
