import React from 'react';
import { Link } from 'react-router-dom';
import { BreadScrumbWrapper } from '../../styles/DownloadDetail';
import TextDefault from '../ui/TextDefault';

const BreadScrumb = () => (
  <BreadScrumbWrapper>
    <Link to="/blockfish/download">
      <span style={{ marginRight: 10 }}>
        <TextDefault size="16px" color="#808080">
          Home
        </TextDefault>
      </span>
    </Link>

    <span style={{ marginRight: 10 }}>
      <TextDefault size="16px" color="#808080">
        {'>'}
      </TextDefault>
    </span>

    <Link to="/blockfish/download">
      <span style={{ marginRight: 10 }}>
        <TextDefault size="16px" color="#808080">
          하위목록1
        </TextDefault>
      </span>
    </Link>

    <span style={{ marginRight: 10 }}>
      <TextDefault size="16px" color="#808080">
        {'>'}
      </TextDefault>
    </span>

    <Link to="/blockfish/download">
      <span style={{ marginRight: 10 }}>
        <TextDefault size="16px" color="#808080">
          하위목록2
        </TextDefault>
      </span>
    </Link>

    <span style={{ marginRight: 10 }}>
      <TextDefault size="16px" color="#808080">
        {'>'}
      </TextDefault>
    </span>

    <TextDefault size="16px" color="#808080">
      토크온
    </TextDefault>
  </BreadScrumbWrapper>
);

export default BreadScrumb;
