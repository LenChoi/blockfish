import React, { useEffect, useState } from 'react';
import { isEmpty } from '../../utils/utils';
import TextDefault from '../ui/TextDefault';
import ListCardTemplate from '../cards/ListCardTemplate';
import {
  ListSelectUnderLine,
  SelectionWrapper,
  SelectionWrapperLi,
  MainSection,
  ListWrapper,
} from '../../styles/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getListByOsStart, getListStart } from '../../modules/actions/list';
import { Link } from 'react-router-dom';

const DownloadMain = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const { loading, list } = useSelector((state) => ({
    loading: state.list.loading,
    list: state.list.success,
  }));

  const [recentItems, setRecentItems] = useState([
    { id: 0, name: '전체', clicked: true },
    { id: 1, name: 'Windows', clicked: false },
    { id: 2, name: 'Mac', clicked: false },
  ]);

  const [ratingItems, setRatingItems] = useState([
    { id: 0, name: '전체', clicked: true },
    { id: 1, name: 'Windows', clicked: false },
    { id: 2, name: 'Mac', clicked: false },
  ]);

  const onClickListRecentItem = (e, idx) => {
    const filtered = recentItems.filter((data) => data.clicked)[0];
    if (filtered.id === idx) {
      return;
    }

    setRecentItems(
      recentItems.map((data) => ({
        ...data,
        clicked: data.id === idx ? true : false,
      })),
    );

    // 전체를 클릭시 search/all api 호출
    if (idx === 0) {
      dispatch(getListStart());
    } else {
      dispatch(
        getListByOsStart({
          orderType: 'Date',
          osType: recentItems[idx].name,
        }),
      );
    }
  };

  const onClickListRatingItem = (e, idx) => {
    const filtered = ratingItems.filter((data) => data.clicked)[0];
    if (filtered.id === idx) {
      return;
    }

    setRatingItems(
      ratingItems.map((data) => ({
        ...data,
        clicked: data.id === idx ? true : false,
      })),
    );

    // 전체를 클릭시 search/all api 호출
    if (idx === 0) {
      dispatch(getListStart());
    } else {
      dispatch(
        getListByOsStart({
          orderType: 'Rank',
          osType: ratingItems[idx].name,
        }),
      );
    }
  };

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
    <article>
      <MainSection>
        <TextDefault size="25px" weight="700">
          최신
        </TextDefault>

        <div>
          <SelectionWrapper>
            {!isEmpty(recentItems) &&
              recentItems.map((data) => (
                <SelectionWrapperLi
                  key={data.id}
                  onClick={(e) => onClickListRecentItem(e, data.id)}
                >
                  <TextDefault size="16px" lineHeight="35px">
                    {data.name}
                  </TextDefault>
                  <ListSelectUnderLine clicked={data.clicked} />
                </SelectionWrapperLi>
              ))}
          </SelectionWrapper>
        </div>

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
      </MainSection>

      <MainSection style={{ marginTop: 80 }}>
        <TextDefault size="25px" weight="700">
          인기
        </TextDefault>

        <div>
          <SelectionWrapper>
            {!isEmpty(ratingItems) &&
              ratingItems.map((data) => (
                <SelectionWrapperLi
                  key={data.id}
                  data-name={data.name}
                  onClick={(e) => onClickListRatingItem(e, data.id)}
                >
                  <TextDefault size="16px" lineHeight="35px">
                    {data.name}
                  </TextDefault>
                  <ListSelectUnderLine clicked={data.clicked} />
                </SelectionWrapperLi>
              ))}
          </SelectionWrapper>
        </div>

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
      </MainSection>
    </article>
  );
};

export default DownloadMain;
