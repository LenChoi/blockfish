import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useInputPage from '../../hooks/useInputPage';
import { getListStart } from '../../modules/actions/list';
import { RightLayout } from '../../styles/Download';
import { isEmpty } from '../../utils/utils';
import ListCardTemplate from '../cards/ListCardTemplate';
import { ListWrapper } from '../../styles/Main';
import PagingContainer from '../pagination/PagingContainer';
import SlickSlider from '../slider/SlickSlider';
import TextDefault from '../ui/TextDefault';
import DownloadControll from './DownloadControll';
import SortingBar from './SortingBar';

const DownloadRight = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const { loading, list } = useSelector((state) => ({
    loading: state.list.loading,
    list: state.list.success,
  }));
  const [page, onhandleChangePage] = useInputPage(1);

  // api 호출 시작
  useEffect(() => {
    dispatch(getListStart());
  }, []);

  useEffect(() => {
    console.log('loading', loading);
    if (!isEmpty(list)) {
      setFileList(list.content);
    }
  }, [list]);

  return (
    <RightLayout>
      <TextDefault size="20px" weight="700">
        추천
      </TextDefault>

      <SlickSlider />

      <div style={{ marginTop: 20 }}>
        <DownloadControll />
      </div>

      <SortingBar />

      <div style={{ marginTop: 20 }}>
        {!isEmpty(fileList) && (
          <ListWrapper>
            {!isEmpty(fileList) &&
              fileList.map((data) => (
                <li key={data.id}>
                  <Link to={`/blockfish/download/detail/${data.id}`}>
                    <ListCardTemplate content={data} />
                  </Link>
                </li>
              ))}
          </ListWrapper>
        )}
      </div>

      {/* 페이징 - 시작 */}
      <PagingContainer whlPage={5} page={page} handleChangePage={onhandleChangePage} />
      {/* 페이징 - 끝 */}
    </RightLayout>
  );
};

export default DownloadRight;
