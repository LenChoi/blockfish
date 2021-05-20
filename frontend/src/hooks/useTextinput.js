import { useState } from 'react';

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};

export default useInput;
