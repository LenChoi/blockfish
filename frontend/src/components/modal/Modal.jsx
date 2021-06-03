import React from 'react';
import { useDispatch } from 'react-redux';
// import { useSpring, animated } from 'react-spring';

import { isEmpty } from '../../utils/utils';
import { closeModal } from '../../modules/actions/modal';
import { ModalOverlay } from '../../styles/Modal';

const Modal = (props) => {
  const { children } = props;
  const dispatch = useDispatch();

  // const animProps = useSpring({
  //   config: { duration: 300 },

  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  // });
  const onClickBackground = (e) => {
    e.preventDefault();
    const accessKey = e.target.dataset.key;
    if (!isEmpty(accessKey) && accessKey.indexOf('overlay') > -1) {
      dispatch(closeModal());
    }
  };

  return (
    <>
      <ModalOverlay data-key="overlay" onClick={onClickBackground}>
        {children}
      </ModalOverlay>
    </>
  );
};

export default Modal;
