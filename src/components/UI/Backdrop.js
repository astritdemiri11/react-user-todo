import PropTypes from 'prop-types';

import classes from './Backdrop.module.css';

const Backdrop = ({ onConfirm }) => {
  const confirmHandler = (event) => {
    if (onConfirm) {
      onConfirm(event);
    }
  };

  return <div className={classes.backdrop} onClick={confirmHandler} aria-hidden="true" />;
};

Backdrop.propTypes = {
  onConfirm: PropTypes.func,
};

Backdrop.defaultProps = {
  onConfirm: null,
};

export default Backdrop;
