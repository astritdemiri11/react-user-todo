import PropTypes from 'prop-types';

import classes from './Card.module.css';

const Card = ({ children, className }) => <div className={`${classes.card} ${className}`}>{children}</div>;

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: null,
};

export default Card;
