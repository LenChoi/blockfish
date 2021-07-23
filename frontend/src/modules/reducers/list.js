import { GET_LIST, GET_LIST_ERROR, GET_LIST_SUCCESS, RESET_LIST } from '../actions/list';

const initState = {
  loading: false,
  success: null,
  error: null,
};

/**
 * @function list
 * @description list Reducer
 */
// list Reducer
const list = (state = initState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        loading: true,
        success: null,
        error: null,
      };
    case GET_LIST_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: null,
      };
    case GET_LIST_ERROR:
      return {
        loading: false,
        success: null,
        error: action.payload,
      };
    case RESET_LIST:
      return initState;
    default:
      return state;
  }
};

export default list;
