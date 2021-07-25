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
import { getListStart } from '../../modules/actions/list';
import { Link } from 'react-router-dom';

const DownloadMain = () => {
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const { loading, list } = useSelector((state) => ({
    loading: state.list.loading,
    list: state.list.success,
  }));

  const [selectItems, setSelectItems] = useState([
    { id: 0, name: 'Windows', clicked: false },
    { id: 1, name: 'Mac', clicked: false },
    { id: 2, name: 'Android', clicked: false },
    { id: 3, name: 'iOS', clicked: false },
  ]);

  const onClickListSelection = (e) => {
    const name = e.target.dataset.name;
    setSelectItems(
      selectItems.map((data) => ({
        ...data,
        clicked: data.name === name ? true : false,
      })),
    );
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
            {!isEmpty(selectItems) &&
              selectItems.map((data) => (
                <SelectionWrapperLi
                  key={data.id}
                  data-name={data.name}
                  onClick={onClickListSelection}
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

      <MainSection>
        <TextDefault size="25px" weight="700">
          인기
        </TextDefault>

        <div>
          <SelectionWrapper>
            {!isEmpty(selectItems) &&
              selectItems.map((data) => (
                <SelectionWrapperLi
                  key={data.id}
                  data-name={data.name}
                  onClick={onClickListSelection}
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
