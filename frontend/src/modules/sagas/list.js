import { put, takeEvery } from 'redux-saga/effects';
import { getApi } from '../../api/postApi';
import { isEmpty } from '../../utils/utils';
import { getListError, getListSuccess, GET_LIST, GET_LIST_BY_OS } from '../actions/list';

// 모든 다운로드 목록
export function* getList() {
  const data = yield getApi('/search/all');

  try {
    if (!isEmpty(data) && data.status === 200) {
      yield put(getListSuccess(data.data));
    } else {
      yield put(getListError(data.data));
    }
  } catch (error) {
    yield put(getListError(data.data));
  }

  return data;
}

// OS별 다운로드 목록
export function* getListByOS() {
  const data = yield getApi('/search/byOs');

  try {
    if (!isEmpty(data) && data.status === 200) {
      yield put(getListSuccess(data.data));
    } else {
      yield put(getListError(data.data));
    }
  } catch (error) {
    yield put(getListError(data.data));
  }

  return data;
}

// API 호출 SAGA
export function* getListSaga() {
  yield takeEvery(GET_LIST, getList);
  yield takeEvery(GET_LIST_BY_OS, getListByOS);
}
