import PropTypes from 'prop-types';

import Button from './Button';
import Card from './Card';
import classes from './Overlay.module.css';

const Overlay = ({ title, message, onConfirm }) => {
  const confirmHandler = (event) => {
    if (onConfirm) {
      onConfirm(event);
    }
  };

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>

      <div className={classes.content}>
        <p>{message}</p>
      </div>

      <footer className={classes.actions}>
        <Button type="button" onClick={confirmHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

Overlay.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
};

Overlay.defaultProps = {
  onConfirm: null,
};

export default Overlay;
