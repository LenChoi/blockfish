import { put, takeEvery } from 'redux-saga/effects';
import { postApi } from '../../api/postApi';
import { isEmpty } from '../../utils/utils';
import { reqFileUploadError, reqFileUploadSuccess, REQ_FILE_UPLOAD } from '../actions/fileUpload';

// API 호출 함수
export function* reqUpload({ payload }) {
  const data = yield postApi('/file/uploadTest', payload);

  try {
    if (!isEmpty(data) && data.status === 200) {
      const resData = data.data;

      if (resData.response === 'fail') {
        yield put(reqFileUploadError(data));
        yield alert('업로드에 실패했습니다. 다시 시도해주세요.');
      } else {
        yield put(reqFileUploadSuccess(data));
        yield alert('업로드 완료되었습니다.');
      }
    }
  } catch (error) {
    yield put(reqFileUploadError(data));
  }

  return data;
}

// API 호출 SAGA
export function* reqFileUploadSaga() {
  yield takeEvery(REQ_FILE_UPLOAD, reqUpload);
}
