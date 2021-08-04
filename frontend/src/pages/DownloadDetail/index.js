import React, { useEffect, useState } from 'react';
import { postApi } from '../../api/postApi';
import BreadScrumb from '../../components/downloadDetail/BreadScrumb';
import DownloadDetailLeft from '../../components/downloadDetail/DownloadDetailLeft';
import DownloadDetailRight from '../../components/downloadDetail/DownloadDetailRight';
import { DnldDetailWrapper } from '../../styles/DownloadDetail';
import { isEmpty } from '../../utils/utils';

const DownloadDetail = (props) => {
  const { match } = props;
  const [downloadId, setDownloadId] = useState(match.params.id);

  useEffect(() => {
    // API 호출
    console.log('match.params', match.params.id);

    const data = postApi('/file/downloadTest', {
      fileName: 'top_search.png',
    });

    try {
      if (!isEmpty(data) && data.status === 200) {
        console.log(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <BreadScrumb />
      <DnldDetailWrapper>
        <DownloadDetailLeft />
        <DownloadDetailRight />
      </DnldDetailWrapper>
    </>
  );
};

export default DownloadDetail;
