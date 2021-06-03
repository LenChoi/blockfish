import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from '../../styles/Modal';

const ModalContainer = (props) => {
  const { children } = props;
  return <ModalWrapper>{children}</ModalWrapper>;
};

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContainer;
