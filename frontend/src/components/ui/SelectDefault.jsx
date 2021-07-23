import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../styles/materialsStyle';
import { isEmpty } from '../../utils/utils';
import { styled } from '@material-ui/core/styles';

const MySelect = styled(MenuItem)({
  color: 'black',
  div: {
    top: '257px',
  },
});

const SelectDefault = ({ value, menuItems, selectName, onChangeMenu }) => {
  const classes = useStyles();

  return (
    <FormControl className={`${classes.uploadSelectForm}`}>
      <Select
        className={`${classes.uploadSelect}`}
        value={value}
        onChange={onChangeMenu}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="" disabled>
          {selectName}
        </MenuItem>
        <MySelect>
          {!isEmpty(menuItems) &&
            menuItems.map((data) => (
              <MenuItem value={data.name} key={data.id}>
                {data.name}
              </MenuItem>
            ))}
        </MySelect>
      </Select>
    </FormControl>
  );
};

export default SelectDefault;
