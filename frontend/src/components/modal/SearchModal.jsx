import React from 'react';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';
import { SearchModalContainer, SearchModalWrapper } from '../../styles/Modal';

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

const SearchModal = () => {
  const modalState = useSelector((state) => state.modal);
  const animProps = useSpring({
    config: { duration: 300 },

    from: { marginTop: '-300px', transition: '0.3s ease-out' },
    to: { marginTop: '0px' },
  });

  console.log('modalState', modalState);

  return (
    <animated.div style={animProps}>
      <SearchModalContainer>
        <SearchModalWrapper>
          <h2 id="spring-modal-title">Spring modal</h2>
          <p id="spring-modal-description">react-spring animates me.</p>
        </SearchModalWrapper>
      </SearchModalContainer>
    </animated.div>
  );
};

export default SearchModal;
