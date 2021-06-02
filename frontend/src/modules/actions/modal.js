// 액션 타입
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// // 액션 생성 함수
export const openModal = (contentId, modalProps) => ({
  type: OPEN_MODAL,
  payload: { contentId, modalProps },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
