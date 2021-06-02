import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '../components/modal/Modal';
import { isEmpty } from '../utils/utils';
import { CONTENT_MAP } from './ModalProviderWithKey';

const ModalProvider = () => {
  const modalReducerState = useSelector((state) => state.modal);

  const ModalContent = CONTENT_MAP[isEmpty(modalReducerState) ? '' : modalReducerState.contentId];
  const showModal = isEmpty(modalReducerState) ? false : modalReducerState.showModal;

  console.log('modalReducerState', modalReducerState);
  console.log('ModalContent', ModalContent);

  return (
    <div>
      {showModal && ModalContent && (
        <Modal>
          <ModalContent {...modalReducerState.modalProps} />
        </Modal>
      )}
    </div>
  );
};

export default ModalProvider;
