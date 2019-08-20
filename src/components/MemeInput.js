import React from 'react';
import PropTypes from 'prop-types';

function MemeInput({ header, imgURL, footer, handleChange }) {
  return (
    <>
      <form>
        <input name="header" value={header} placeholder="header text" onChange={(event) => handleChange(event)}></input>
        <input name="imgURL" value={imgURL} placeholder="imgURL text" onChange={(event) => handleChange(event)}></input>
        <input name="footer" value={footer} placeholder="footer text" onChange={(event) => handleChange(event)}></input>
        <button>Meme Me</button>
      </form>
    </>
  );
}

MemeInput.propTypes = {
  header: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default MemeInput;
