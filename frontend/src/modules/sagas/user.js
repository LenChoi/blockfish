import { fork, delay, put, takeLatest, call } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../actions/user';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    console.log('saga logIn', action.data);
    const result = yield call(logInAPI, action.data);
    console.log(result.message);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

// API 호출 SAGA
export function* fetchUserSaga() {
  yield fork(watchLogIn);
}
