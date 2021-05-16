import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
// import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(8),
    },
  },
}));

const PagingContainer = (props) => {
  const classes = useStyles();
  const { whlPage, page, handleChangePage } = props;

  return (
    <div className={classes.root}>
      <Pagination
        count={whlPage}
        page={page}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default PagingContainer;
