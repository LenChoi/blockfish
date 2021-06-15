import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const AuthRoute = (props) => {
  const { isAuthUser, type } = props;
  if (type === 'private' && isAuthUser) return <Redirect to="/login" />;
  if (type === 'guest' && !isAuthUser) return <Redirect to="/blockfish" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser,
});

export default connect(mapStateToProps)(AuthRoute);
