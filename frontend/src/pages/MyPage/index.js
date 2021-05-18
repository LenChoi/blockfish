import React from 'react';
import TextDefault from '../../components/ui/TextDefault';
import DefaultLayout from '../../layouts/DefaultLayout';

const index = () => {
  console.log('hello');
  return (
    <DefaultLayout>
      <TextDefault size="30px" weight="700">
        MyPage
      </TextDefault>
    </DefaultLayout>
  );
};

export default index;
