import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../styles/materialsStyle';
import { isEmpty } from '../../utils/utils';

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
        {!isEmpty(menuItems) &&
          menuItems.map((data) => (
            <MenuItem value={data.name} key={data.id}>
              {data.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectDefault;
