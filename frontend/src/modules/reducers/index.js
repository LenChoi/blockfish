import { all, fork } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import { fetchUserSaga } from '../sagas/user';
import user from '../actions/user';
import modal from './modal';
import list from './list';
import fileUpload from './fileUpload';
import { reqFileUploadSaga } from '../sagas/fileUpload';
import { getListSaga } from '../sagas/list';

const rootReducer = combineReducers({
  list,
  user,
  modal,
  fileUpload,
});

export function* rootSaga() {
  yield all([fork(fetchUserSaga), fork(reqFileUploadSaga), fork(getListSaga)]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
