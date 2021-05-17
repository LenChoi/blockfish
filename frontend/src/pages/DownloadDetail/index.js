import React, { useEffect } from 'react';
import BreadScrumb from '../../components/downloadDetail/BreadScrumb';
import DownloadDetailLeft from '../../components/downloadDetail/DownloadDetailLeft';
import DownloadDetailRight from '../../components/downloadDetail/DownloadDetailRight';
import DefaultLayout from '../../layouts/DefaultLayout';
import { DnldDetailWrapper } from '../../styles/DownloadDetail';

const DownloadDetail = (props) => {
  const { match } = props;

  useEffect(() => {
    // API 호출
    console.log('match.params', match.params.id);
  }, []);

  return (
    <DefaultLayout>
      <BreadScrumb />
      <DnldDetailWrapper>
        <DownloadDetailLeft />
        <DownloadDetailRight />
      </DnldDetailWrapper>
    </DefaultLayout>
  );
};

export default DownloadDetail;
