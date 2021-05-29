import { useState } from 'react';

const useTextinput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};

export default useTextinput;
