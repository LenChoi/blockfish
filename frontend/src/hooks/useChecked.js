import { useState } from 'react';

const useChecked = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handler = (e) => {
    setValue(e.target.checked);
  };

  return [value, handler];
};

export default useChecked;
