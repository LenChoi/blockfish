import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  width: calc(100vw);
  height: calc(100vh);
  overflow: hidden;
  top: 0;
  left: 0;
  background-color: rgba(192, 192, 192, 0.6);
  z-index: 1001;
`;
export const ModalAnim = styled.div`
  transition: 0.3s ease-out;
  ${(props) => ({ opacity: props.showModal ? '1' : '0' })};
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1003;
`;

// Search Layout
export const SearchModalContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 300px;
  box-shadow: 2px 2px 4px 1px rgba(40, 40, 40, 0.3);
`;
export const SearchModalWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
