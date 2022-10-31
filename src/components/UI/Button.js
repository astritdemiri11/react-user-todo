import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = ({ children, type, onClick }) => {
  const clickHandler = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={classes.button}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  onClick: null,
};

export default Button;
