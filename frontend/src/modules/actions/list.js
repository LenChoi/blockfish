export const GET_LIST = 'GET_LIST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_ERROR = 'GET_LIST_ERROR';
export const SET_LIST = 'SET_LIST';
export const RESET_LIST = 'RESET_LIST';

// 액션 함수 정의
export const getListStart = () => ({
  type: GET_LIST,
});
export const getListSuccess = (data) => ({
  type: GET_LIST_SUCCESS,
  payload: data,
});
export const getListError = (data) => ({
  type: GET_LIST_ERROR,
  payload: data,
});
export const setList = (data) => ({
  type: SET_LIST,
  payload: data,
});
