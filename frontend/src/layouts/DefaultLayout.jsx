import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/footer/Footer';
import Nav from '../components/nav/Nav';
import { MainConent, MainConentContainer, MainConentWrapper } from '../styles/DefaultLayout';

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Nav />
      <MainConent>
        <MainConentContainer>
          <MainConentWrapper>{children}</MainConentWrapper>
        </MainConentContainer>
      </MainConent>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
