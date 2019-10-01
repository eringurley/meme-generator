import React from 'react';
import PropTypes from 'prop-types';

function MemeDisplay({ header, imgURL, footer }) {
  return (
    <>
      <section>
        <p>{header}</p>
        <img src={imgURL}/>
        <p>{footer}</p>
      </section>
    </>
  );
}

MemeDisplay.propTypes = {
  header: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired
};

export default MemeDisplay;
