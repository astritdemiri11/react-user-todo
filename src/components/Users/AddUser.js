import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const inputUsername = nameInputRef.current.value;
    const inputAge = ageInputRef.current.value;

    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    if (onAddUser) {
      onAddUser(inputUsername, inputAge);
    }

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">
            Username
            <input
              ref={nameInputRef}
              id="username"
              type="text"
            />
          </label>

          <label htmlFor="age">
            Age (Years)
            <input
              ref={ageInputRef}
              id="age"
              type="number"
            />
          </label>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

AddUser.propTypes = {
  onAddUser: PropTypes.func,
};

AddUser.defaultProps = {
  onAddUser: null,
};

export default AddUser;
