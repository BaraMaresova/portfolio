import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import cross from '../../images/cross.svg';
import './about.scss';

export const About = (props) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className="dialog">
      <div className="navButton" onClick={handleClickOpen}>
        {props.navItem}
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={dialogOpen}
        style={{ backgroundColor: 'rgba(32, 0, 80, 0.5)' }}
      >
        <div className="dialog_header" onClose={handleClose}>
          <h3 className="dialog_title">O mně</h3>
          <img
            className="dialog_closeIcon"
            src={cross}
            alt="cross"
            onClick={handleClose}
          />
        </div>
        <div className="dialog_divider">
          <p className="dialog_text">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p className="dialog_text">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p className="dialog_text">
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </div>
      </Dialog>{' '}
    </div>
  );
};
