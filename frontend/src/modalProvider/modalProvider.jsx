import React from 'react';
import { useSelector } from 'react-redux';

import Modal from '../components/modal/Modal';
import { ModalAnim } from '../styles/Modal';
import { isEmpty } from '../utils/utils';
import { CONTENT_MAP } from './ModalProviderWithKey';

const ModalProvider = () => {
  const modalReducerState = useSelector((state) => state.modal);

  const ModalContent = CONTENT_MAP[isEmpty(modalReducerState) ? '' : modalReducerState.contentId];
  const showModal = isEmpty(modalReducerState) ? false : modalReducerState.showModal;

  console.log('modalReducerState', modalReducerState);

  // const animProps = useSpring({
  //   config: { duration: 300 },
  //   from: {
  //     opacity: showModal ? 0 : 1,
  //   },
  // });

  return (
    <ModalAnim showModal={showModal}>
      {showModal && ModalContent && (
        <Modal>
          <ModalContent {...modalReducerState.modalProps} />
        </Modal>
      )}
    </ModalAnim>
  );
};

export default ModalProvider;
