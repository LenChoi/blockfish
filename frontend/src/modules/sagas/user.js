import { fork, delay, put, takeLatest } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../actions/user';

function* logIn(action) {
  try {
    console.log('saga logIn');
    // const result = yield call(logInAPI);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
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
