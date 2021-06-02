import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SearchModal = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <h2 id="spring-modal-title">Spring modal</h2>
      <p id="spring-modal-description">react-spring animates me.</p>
    </div>
  );
};

export default SearchModal;
