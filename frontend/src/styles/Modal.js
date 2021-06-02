import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  width: calc(100vw);
  height: calc(100vh);
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1001;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1003;
`;
