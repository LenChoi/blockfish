import React from 'react';
import { useDispatch } from 'react-redux';
import { isEmpty } from '../../utils/utils';
import { closeModal } from '../../modules/actions/modal';
import { useSpring, animated } from 'react-spring';
import { ModalOverlay, ModalWrapper } from '../../styles/Modal';

const Modal = (props) => {
  const { children } = props;
  const dispatch = useDispatch();

  const animProps = useSpring({
    config: { duration: 200 },

    from: { opacity: 0, transform: 'scale(0.7)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });
  const onClickBackground = (e) => {
    e.preventDefault();
    const accessKey = e.target.dataset.key;
    if (!isEmpty(accessKey) && accessKey.indexOf('overlay') > -1) {
      dispatch(closeModal());
    }
  };

  return (
    <animated.div props={animProps}>
      {/* <ModalOverlay className="overlay" onClick={(e) => onClickBackground(e, props.bgClickdisable)}> */}
      <ModalOverlay data-key="overlay" onClick={onClickBackground}>
        <ModalWrapper>{children}</ModalWrapper>
      </ModalOverlay>
    </animated.div>
  );
};

export default Modal;
