import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import fetchData, { fetchSaga } from '../sagas';
import list from '../actions/list';

const rootReducer = combineReducers({
  fetchData,
  list,
});

export function* rootSaga() {
  yield all([fetchSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
