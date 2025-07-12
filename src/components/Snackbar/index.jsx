import React from 'react';
import { Snackbar as MuiSnackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

const Snackbar = ({
  open,
  onClose,
  message,
  severity = 'success',
  duration = 3000,
}) => {
  const [show, setShow] = React.useState(open);

  const handleClose = () => {
    setShow(false);
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <MuiSnackbar
      open={show}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
