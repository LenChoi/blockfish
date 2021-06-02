import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal';

const initState = {
  contentId: '',
  showModal: false,
  modalProps: {},
};

/**
 * @function modal
 * @param {state action}
 * @description 모달 state 관리
 */
const modal = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case OPEN_MODAL:
      return { ...payload, showModal: true };

    case CLOSE_MODAL:
      return { ...initState, showModal: false };

    default:
      return state;
  }
};

export default modal;
