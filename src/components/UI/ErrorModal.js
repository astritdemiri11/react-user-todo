import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import Overlay from './Overlay';

const ErrorModal = ({ title, message, onConfirm }) => {
  const confirmHandler = (event) => {
    if (onConfirm) {
      onConfirm(event);
    }
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={confirmHandler} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<Overlay title={title} message={message} onConfirm={confirmHandler} />, document.getElementById('overlay-root'))}
    </>
  );
};

ErrorModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func,
};

ErrorModal.defaultProps = {
  onConfirm: null,
};

export default ErrorModal;
