import { put, takeEvery } from 'redux-saga/effects';
import { getApi } from '../../api/postApi';
import { isEmpty } from '../../utils/utils';
import { getListError, getListSuccess, GET_LIST } from '../actions/list';

// API 호출 함수
export function* getList() {
  const data = yield getApi('/file/searchAll');

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
}
