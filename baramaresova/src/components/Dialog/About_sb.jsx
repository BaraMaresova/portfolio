import React, { useState } from 'react';
import cross from '../../images/cross_light.svg';
import speechBubble from '../../images/speechBubble.svg';
import './about_sb.scss';

export const About_sb = (props) => {
  const [bubbbleOpen, setBubbleOpen] = useState(false);
  const handleClickOpen = () => {
    setBubbleOpen(true);
  };

  const handleClose = () => {
    setBubbleOpen(false);
  };

  return (
    <>
      <div className="navButton" onClick={handleClickOpen}>
        {props.navItem}
      </div>
      {bubbbleOpen && (
        <div className="speechBubble_div" onClick={handleClose}>
          <img
            className="about_closeIcon"
            src={cross}
            alt="cross"
            onClick={handleClose}
          />
          <p className="about_text">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dignissimos ipsa officia consequuntur,
            molestiae rerum id harum ipsum exercitationem.
          </p>
        </div>
      )}
    </>
  );
};
