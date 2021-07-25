import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  SearchBtnWrapper,
  SearchContent,
  SearchContentWrapper,
  SearchInputContainer,
  SearchInputWrapper,
  SearchMainWrapper,
  SearchModalContainer,
  SearchModalHeader,
  SearchModalInput,
  SearchModalWrapper,
} from '../../styles/Modal';
import { ReactComponent as CancelSvg } from '../../assets/cancel.svg';
import { ReactComponent as SearchSvg } from '../../assets/search-black.svg';
import { ReactComponent as RemoveSvg } from '../../assets/remove.svg';
// import useInput from '../../hooks/useInput';
import { closeModal } from '../../modules/actions/modal';
import { isEmpty } from '../../utils/utils';
import TextDefault from '../ui/TextDefault';

const SearchModal = () => {
  const [search, setSearch] = useState('');
  const [fileList, setFileList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const animProps = useSpring({
    config: { duration: 300 },
    from: { marginTop: '-300px', transition: '0.3s ease-out' },
    to: { marginTop: '0px' },
  });
  const dispatch = useDispatch();
  const { loading, list } = useSelector((state) => ({
    loading: state.list.loading,
    list: state.list.success,
  }));
  const history = useHistory();

  const onClickClose = () => {
    console.log('onClickClose');
    dispatch(closeModal());
  };

  const onChangeSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);

    if (searchText.length !== 0) {
      setSearchList(
        fileList.filter((data) => {
          const fileName = data.name.toString();
          const fileInfo = data.info.toString();

          return fileName.includes(searchText) || fileInfo.includes(searchText);
        }),
      );
    } else {
      setSearchList([]);
    }
  };

  const onClickLink = (id) => {
    history.push(`/blockfish/download/detail/${id}`);
    dispatch(closeModal());
  };

  useEffect(() => {
    console.log('loading', loading);
    if (!isEmpty(list)) {
      setFileList(list.content);
    }
  }, [list]);

  console.log('search', search);
  console.log('searchList', searchList);

  return (
    <animated.div style={animProps}>
      <SearchModalContainer>
        <SearchModalWrapper>
          <SearchModalHeader>
            <SearchBtnWrapper>
              <CancelSvg width="35" height="35" fill="#282828" onClick={onClickClose} />
            </SearchBtnWrapper>
          </SearchModalHeader>

          <SearchMainWrapper>
            <SearchInputContainer>
              <SearchSvg width="30" height="30" fill="#ececec" style={{ paddingLeft: 15 }} />
              <SearchInputWrapper>
                <SearchModalInput
                  type="text"
                  placeholder="검색할 내용을 입력해주세요."
                  value={search}
                  onChange={onChangeSearch}
                />
                <SearchBtnWrapper>
                  <RemoveSvg width="15" height="15" fill="gray" />
                </SearchBtnWrapper>
              </SearchInputWrapper>
            </SearchInputContainer>
            <SearchContentWrapper>
              <ul>
                {searchList.map((data) => (
                  <SearchContent key={data.key} onClick={() => onClickLink(data.id)}>
                    <TextDefault size="22">{data.name}</TextDefault>
                  </SearchContent>
                ))}
              </ul>
            </SearchContentWrapper>
          </SearchMainWrapper>
        </SearchModalWrapper>
      </SearchModalContainer>
    </animated.div>
  );
};

export default SearchModal;
