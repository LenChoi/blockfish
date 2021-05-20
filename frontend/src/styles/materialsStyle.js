import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  downloadBtn: {
    width: '100%',
    height: '50px',
    backgroundColor: '#1e90ff',
    borderRadius: '3px',
    border: '0px',
    color: '#fff !important',
    fontSize: '20px',
    fontWeight: '700',
  },
  commRating: {
    fontSize: '20px',
  },
  userInfoInput: {
    minWidth: '400px',
    fontSize: '20px',
    marginLeft: 60,
    borderRadius: 5,
    border: '2px solid rgb(205,205,205)',
    padding: '5px 20px',
    transition: '0.1s linear',
    '&:focused': {
      boxShadow: '5px 5px 5px 1px rgba(40, 40, 40, 0.3)',
      borderColor: '#4169e1',
    },
  },
  userInfoUpdateBtn: {
    width: '200px',
    fontSize: '20px',
    margin: 30,
    borderRadius: 3,
    border: '2px solid #0000cd',
    backgroundColor: '#4169e1',
    color: 'white',
    padding: '10px 0',
  },
  userInfoCancelBtn: {
    width: '200px',
    fontSize: '20px',
    margin: 30,
    borderRadius: 3,
    border: '2px solid #222222',
    backgroundColor: '#505050',
    color: 'white',
    padding: '5px 0',
  },
});
