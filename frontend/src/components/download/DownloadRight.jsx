import React, { useEffect, useState } from 'react';
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
  // const [viewState, setViewState] = useState(false);
  const [page, onhandleChangePage] = useInputPage(1);
  // const onToggleView = (s) => {
  //   if (s) {
  //     setViewState(true);
  //   } else {
  //     setViewState(false);
  //   }
  // };

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

      {/* <SortingBar onToggleView={onToggleView} /> */}
      <div style={{ marginTop: 20 }}>
        {/* {!isEmpty(fileList) &&
          (viewState ? (
            fileList.map((data) => <ListCardTemplate key={data.id} content={data} />)
          ) : (
            <GridLayoutWrapper>
              {fileList.map((data) => (
                <GridCardTemplate key={data.id} content={data} />
              ))}
            </GridLayoutWrapper>
          ))} */}

        {!isEmpty(fileList) && (
          // <GridLayoutWrapper>
          //   {fileList.map((data) => (
          //     <DownloadCard key={data.id} content={data} />
          //   ))}
          // </GridLayoutWrapper>

          <ListWrapper>
            {!isEmpty(fileList) &&
              fileList.map((data) => <ListCardTemplate key={data.id} content={data} />)}
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
